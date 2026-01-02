import { useContext } from "react";
import useConversation from "../Store/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { SocketContext } from "../Context/SocketContext";

function MessageContainer() {
  const {selectedConversation, setSelectedConversation} = useConversation();

  return (
    <>
      {!selectedConversation ? (
        <div className="w-[70%] h-full flex items-center justify-center">
          <NoChatSelected />
        </div>
      ) : (
        <div className="w-[70%] flex flex-1 flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-2 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img src={selectedConversation.profilePic} />
                </div>
              </div>
              <p className="font-semibold">{selectedConversation.name}</p>
            </div>

            <button className="text-gray-500 hover:text-gray-700">⋮</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            <Messages />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200">
            <MessageInput />
          </div>
        </div>
      )}
    </>
  );
}

export default MessageContainer;
