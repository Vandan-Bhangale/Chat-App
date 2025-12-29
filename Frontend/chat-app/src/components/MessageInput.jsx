import { LuSend } from "react-icons/lu";

function MessageInput() {
  return (
    <>
      <fieldset className="p-3">
        <form className="flex items-center gap-2">
          {/* Input */}
          <input
            type="text"
            placeholder="Type a message..."
            className="
        flex-1
        input
        input-bordered
        rounded-full
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        pr-12
      "
          />

          {/* Send Button */}
          <button
            type="submit"
            className="
        btn
        btn-circle
        bg-blue-500
        hover:bg-blue-600
        text-white
        border-none
      "
          >
            <LuSend className="text-lg" />
          </button>
        </form>
      </fieldset>
    </>
  );
}

export default MessageInput;
