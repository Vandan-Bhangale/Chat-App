function Message() {
  return (
    <>
      <div className="chat chat-start mb-1.5">
        {/* Avatar */}
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ring ring-blue-200 ring-offset-2">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>

        {/* Message Bubble */}
        <div className="chat-bubble shadow-md max-w-[70%]">
          <p className="leading-relaxed">
            It was said that you would destroy the Sith, not join them.
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
