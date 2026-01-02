const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
  },
});

const userSocketMap = {}; //(userId: [socketId1, socketId2, ...]);

io.on("connection", (socket) => {
  console.log("Socket connection initiated");
  console.log("New client connected", socket.id);
  const userId = socket.handshake.query.userId;

  if (userId && userId !== 'undefined') {
    if (!userSocketMap[userId]) {
      userSocketMap[userId] = [];
    }
    userSocketMap[userId].push(socket.id);
    socket.userId = userId;
  }

  io.emit("OnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    if (userId && userSocketMap[userId]) {
      userSocketMap[userId] = userSocketMap[userId].filter(
        (id) => id !== socket.id
      );
      if (userSocketMap[userId].length === 0) {
        delete userSocketMap[userId];
      }
    }
    io.emit("OnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server };
