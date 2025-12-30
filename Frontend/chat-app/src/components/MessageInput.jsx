import { LuSend } from "react-icons/lu";
import useConversation from "../Store/useConversation";
import { useState } from "react";
import axios from "axios";

function MessageInput() {
  // Zustand store (chat messages)
  const { messages, setMessages, selectedConversation } = useConversation();

  // Local input state
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // prevent empty messages
    if (!text.trim() || !selectedConversation) return;

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_GENERAL_API}/api/send/${selectedConversation._id}`,
        { message: text },
        { withCredentials: true }
      );

      console.log("Message sent:", response.data);

      // update chat messages
      setMessages([...messages, response.data]);

      // clear input
      setText("");
    } catch (error) {
      console.error("Error while sending message:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <fieldset className="p-3">
      <form className="flex items-center gap-2" onSubmit={handleSendMessage}>
        {/* Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={loading}
          className="flex-1 input input-bordered rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 pr-12"
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-circle bg-blue-500 hover:bg-blue-600 text-white border-none"
        >
          <LuSend className="text-lg" />
        </button>
      </form>
    </fieldset>
  );
}

export default MessageInput;
