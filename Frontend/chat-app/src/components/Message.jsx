import { useContext } from "react";
import { AuthContext } from "../Context/authContext";
import useConversation from "../Store/useConversation";

function Message({ message }) {
  const { user } = useContext(AuthContext);
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === user._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? user.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-blue-500" : "";

  return (
    <>
      <div className={`chat mb-1.5 ${chatClassName}`}>
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ring ring-blue-200 ring-offset-2">
            <img alt="User avatar" src={profilePic} />
          </div>
        </div>

        {/* Message Bubble */}
        <div className={`chat-bubble ${bubbleColor} shadow-md max-w-[70%]`}>
          <p className="leading-relaxed">{message.message}</p>
          <p className="text-sm text-white flex justify-end">
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
