const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [process.env.FRONTEND_URL], // Frontend URL
    credentials: true,
  },
});

// userId -> Set(socketId)
const userSocketMap = new Map();

/**
 * Get all socketIds of a receiver (for multi-tab support)
 * Returns array of socketIds
 */
const getreceiverSocketId = (receiverId) => {
  const socketSet = userSocketMap.get(receiverId);
  return socketSet ? Array.from(socketSet) : []; // convert Set to array
};

/**
 * Emit to all sockets of a user (handles multi-tab)
 */
const emitToUser = (userId, eventName, data) => {
  const socketIds = getreceiverSocketId(userId);
  socketIds.forEach((socketId) => {
    io.to(socketId).emit(eventName, data);
  });
};

/**
 * Emit online users list to everyone
 */
const emitOnlineUsers = () => {
  io.emit("OnlineUsers", Array.from(userSocketMap.keys()));
};

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  const rawUserId = socket.handshake.auth?.userId || socket.handshake.query?.userId;
  const userId = rawUserId ? String(rawUserId) : null;

  const addUserToMap = (id) => {
    const normalizedId = id ? String(id) : null;
    if (!normalizedId || normalizedId === "undefined") return;

    if (socket.userId && socket.userId !== normalizedId) {
      const existingSet = userSocketMap.get(socket.userId);
      if (existingSet) {
        existingSet.delete(socket.id);
        if (existingSet.size === 0) {
          userSocketMap.delete(socket.userId);
        }
      }
    }

    if (!userSocketMap.has(normalizedId)) {
      userSocketMap.set(normalizedId, new Set());
    }
    userSocketMap.get(normalizedId).add(socket.id);
    socket.userId = normalizedId;
  };

  addUserToMap(userId);

  // Support explicit addUser event from client if query param is missing
  socket.on("addUser", (id) => {
    addUserToMap(id);
    emitOnlineUsers();
  });

  // Emit updated online users
  emitOnlineUsers();

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);

    const uid = socket.userId;

    if (uid && userSocketMap.has(uid)) {
      const socketSet = userSocketMap.get(uid);
      socketSet.delete(socket.id);

      // remove user if no active sockets
      if (socketSet.size === 0) {
        userSocketMap.delete(uid);
      }
    }

    emitOnlineUsers();
  });
});

module.exports = {
  app,
  io,
  server,
  getreceiverSocketId,
  emitToUser,
};
