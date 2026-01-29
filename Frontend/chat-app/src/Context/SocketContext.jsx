import { useEffect, useContext, createContext, useRef, useState } from "react";
import { AuthContext } from "./authContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const socketRef = useRef(null);
  const [onlineUser, setOnlineUser] = useState([]);

  // Initialize socket connection once
  useEffect(() => {
    if (!user?._id) {
      // Only disconnect on logout
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
      setOnlineUser([]);
      return;
    }

    // Only create socket if it doesn't exist
    if (socketRef.current) {
      return;
    }

    const socket = io(import.meta.env.VITE_GENERAL_API, {
      withCredentials: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      query: { userId: user._id },
    });

    socketRef.current = socket;

    const handleOnlineUsers = (users) => {
      setOnlineUser(users);
    };

    socket.on("OnlineUsers", handleOnlineUsers);

    // Cleanup on unmount only
    return () => {
      socket.off("OnlineUsers", handleOnlineUsers);
    };
  }, [user?._id]);

  return (
    <SocketContext.Provider
      value={{
        socket: socketRef.current,
        onlineUser,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
