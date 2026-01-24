const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://chat-app-nine-zeta-56.vercel.app"],      //Frontend URL
    credentials: true,
  },
});

const userSocketMap = {}; //(userId: [socketId1, socketId2, ...]);

const getreceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}


const emitOnlineUsers = () => {
  io.emit("OnlineUsers", Object.keys(userSocketMap));
};

io.on("connection", (socket) => {
  console.log("New client connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId && userId !== "undefined") {
    if (!userSocketMap[userId]) {
      userSocketMap[userId] = new Set();
    }
    userSocketMap[userId].add(socket.id);
    socket.userId = userId;
  }

  // Emit to ALL devices
  emitOnlineUsers();

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);

    const uid = socket.userId;
    if (uid && userSocketMap[uid]) {
      userSocketMap[uid].delete(socket.id);

      if (userSocketMap[uid].size === 0) {
        delete userSocketMap[uid];
      }
    }

    // Again emit to ALL devices
    emitOnlineUsers();
  });
});



module.exports = { app, io, server, getreceiverSocketId};
