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
      const newSocket = io("http://localhost:3000", {
        withCredentials: true,
      });

      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    } else {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    }
  }, [user]); // ✅ VERY IMPORTANT

  return (
    <SocketContext.Provider value={{ socket,onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};
