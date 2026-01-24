import { useEffect, useState, useContext, createContext } from "react";
import { AuthContext } from "./authContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { user } = useContext(AuthContext); 
  const [socket, setSocket] = useState(null);
  const [onlineUser,setOnlineUser] = useState([])

  useEffect(() => {
    if (user) {
      const newSocket = io("https://chat-app-backend-6v9n.onrender.com", {       //Backend URL
        withCredentials: true,
        query : {
          userId:user._id
        }
      });

      setSocket(newSocket);

      newSocket.on("OnlineUsers",(users) => {
        setOnlineUser(users);
      })

      return () => {
        newSocket.disconnect();
      };
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [user?._id]); // ✅ VERY IMPORTANT

  return (
    <SocketContext.Provider value={{ socket,onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
