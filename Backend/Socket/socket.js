const {Server} = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

console.log("🔥 SOCKET SERVER FILE EXECUTED");

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
  },
});

console.log("io instance created");

io.on("connection", (socket) => {
  console.log("Scoket connection initiated");
  console.log("New client connected", socket.id);

    //Socket.on() is used to listen for events and can be used in both frontend & backend.
  socket.on("disconnect",() => {
    console.log("A user disconnected", socket.id);
  })
});

module.exports = { app, io, server };
