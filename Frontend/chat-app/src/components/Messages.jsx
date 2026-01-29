import { useRef, useState, useContext } from "react";
import Message from "./Message";
import { useEffect } from "react";
import useConversation from "../Store/useConversation";
import axios from "axios";
import { SocketContext } from "../Context/SocketContext";

function Messages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { socket } = useContext(SocketContext);

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

  // Listen for new messages via socket
  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.on("newMessage", handleNewMessage);

    return () => {
      socket.off("newMessage", handleNewMessage);
    };
  }, [socket, setMessages]);

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
