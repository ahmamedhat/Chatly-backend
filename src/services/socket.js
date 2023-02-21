const { Server } = require("socket.io");
const { httpServer } = require("../app");

function getActiveUsers(io) {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
      email: socket.email,
      image: socket.image,
    });
  }
  return users;
}

async function connectSocketIo() {
  const io = new Server(httpServer, {
    cors: {
      origin: ["https://chatlylive.vercel.app", "http://localhost:3000"],
      methods: ["GET", "POST"],
    },
  });

  io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    const email = socket.handshake.auth.email;
    const image = socket.handshake.auth.image;
    if (!username || !email) {
      return next(new Error("invalid username"));
    }
    socket.username = username;
    socket.email = email;
    socket.image = image;
    next();
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const users = getActiveUsers(io);
    socket.broadcast.emit("users", users);
    socket.emit("users", users);
    socket.broadcast.emit("new user connected", {
      userID: socket.id,
      username: socket.username,
    });

    socket.on("send-message", (message, room) => {
      if (!room) {
        socket.broadcast.emit("receive-message", message);
      } else {
        socket.to(room).emit("receive-message", message);
      }
      console.log("a message from ", message.sender);
      console.log("saying: ", message.message);
    });
    socket.on("disconnect", () => {
      const users = getActiveUsers(io);
      socket.broadcast.emit("users", users);
      console.log("user disconnected ", socket.username + socket.id);
    });
  });
}

module.exports = {
  connectSocketIo,
};
