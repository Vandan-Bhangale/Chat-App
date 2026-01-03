import { useRef, useState } from "react";
import Message from "./Message";
import { useEffect } from "react";
import useConversation from "../Store/useConversation";
import axios from "axios";

function Messages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // runs when messages increas

  useEffect(() => {
    if (!selectedConversation?._id) return;
    setLoading(true);
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_GENERAL_API}/api/${selectedConversation._id}`,
          { withCredentials: true }
        );

        console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [selectedConversation]);

  return (
    <>
      <div className="messages">
        {messages.length === 0 && <p>No messages yet</p>}

        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </div>
      {/* invisible div at bottom */}
      <div ref={bottomRef} />
    </>
  );
}

export default Messages;
