import useConversation from "../Store/useConversation";

function Conversation({ conversation }) {
  const {selectedConversation, setSelectedConversation} = useConversation();

  return (
    <>
      <div className={`flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg hover:bg-blue-100 hover:text-black transition ${selectedConversation?._id === conversation._id ? 'bg-blue-200 text-black':''}`} onClick={() => setSelectedConversation(conversation)}>
        {/* Avatar */}
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        {/* Name + Last Message */}
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-white-800">{conversation.name}</span>
        </div>
      </div>
    </>
  );
}

export default Conversation;
