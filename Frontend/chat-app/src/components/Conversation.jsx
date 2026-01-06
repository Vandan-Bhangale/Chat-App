import { useContext } from "react";
import useConversation from "../Store/useConversation";
import { SocketContext } from "../Context/SocketContext";
import { AuthContext } from "../Context/authContext";

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { user } = useContext(AuthContext);
  const { onlineUser } = useContext(SocketContext);
  const isOnline = onlineUser.includes(conversation._id);

  console.log("onlineUser:", onlineUser);
  console.log("my id:", user?._id);
  console.log("conversation id:", conversation._id);
  console.log("IsOnline: ", isOnline);

  return (
    <>
      <div
        className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg hover:bg-blue-100 hover:text-black transition ${
          selectedConversation?._id === conversation._id
            ? "bg-blue-200 text-black"
            : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* Avatar */}
        <div className={`avatar ${isOnline ? "avatar-online" : " "}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        {/* Name + Last Message */}
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-white-800">
            {conversation.name}
          </span>
        </div>
      </div>
    </>
  );
}

export default Conversation;
