import { useEffect, useState } from "react";
import Conversation from "./Conversation";
import axios from "axios";

function Conversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/getUser`
        );
        const users = Array.isArray(response.data)
        ? response.data
        : response.data.users || [];

      setConversations(users);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {conversations.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
        />
      ))}
    </>
  );
}

export default Conversations;
