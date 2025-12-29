function NoChatSelected() {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-centertext-center px-6">
        {/* Icon */}
        <div className="mb-6 text-6xl">💬</div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Welcome to ChatApp
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-md">
          Select a conversation from the left to start chatting with your
          friends.
        </p>
      </div>
    </>
  );
}

export default NoChatSelected;
