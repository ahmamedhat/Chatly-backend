const { instrument } = require("@socket.io/admin-ui");
const { Server } = require("socket.io");
const { httpServer } = require("../app");

async function connectSocketIo() {
  const io = new Server(httpServer, {
    cors: {
      origin: ["https://admin.socket.io", "http://localhost:3000"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
      users.push({
        userID: id,
        username: "User: " + socket.id,
      });
    }
    socket.emit("users", users);
    socket.on("send-message", (message, room) => {
      if (!room) {
        socket.broadcast.emit("receive-message", message);
      } else {
        socket.to(room).emit("receive-message", message);
      }
      console.log("a message from ", message.sender);
      console.log("saying: ", message.message);
    });
  });

  instrument(io, {
    auth: false,
  });
}

module.exports = {
  connectSocketIo,
};
