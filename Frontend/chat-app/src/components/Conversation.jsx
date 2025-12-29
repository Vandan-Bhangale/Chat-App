function Conversation({ conversation }) {
  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-lg hover:bg-blue-100 hover:text-black transition">
        {/* Avatar */}
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={conversation.avatar || "https://img.daisyui.com/images/profile/demo/gordon@192.webp"} />
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
