import { useEffect, useContext, createContext, useRef, useState } from "react";
import { AuthContext } from "./authContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const socketRef = useRef(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const userId = user?._id ?? user?.id;

  // Initialize socket connection once
  useEffect(() => {
    if (!userId) {
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
      auth: { userId },
    });

    socketRef.current = socket;

    const normalizeUserId = (item) => {
      if (!item) return null;
      if (typeof item === "string") return item;
      return item.userId || item._id || null;
    };

    const handleOnlineUsers = (users) => {
      const normalizedUsers = Array.isArray(users)
        ? users.map(normalizeUserId).filter(Boolean).map(String)
        : [];
      setOnlineUser(normalizedUsers);
    };

    socket.on("OnlineUsers", handleOnlineUsers);
    socket.on("connect", () => {
      socket.emit("addUser", userId);
    });

    // Send the addUser event immediately so presence is registered even if connect happens fast.
    socket.emit("addUser", userId);

    // Cleanup on unmount only
    return () => {
      socket.off("OnlineUsers", handleOnlineUsers);
      socket.off("connect");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [userId]);

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
