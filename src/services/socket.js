const { Server } = require("socket.io");
const { httpServer } = require("../app");

function getActiveUsers(io) {
  const users = [];
  for (let [socket] of io.of("/").sockets) {
    users.push({
      userID: socket.userID,
      username: socket.username,
      email: socket.email,
      image: socket.image,
    });
  }

  // console.log("all users", users);
  return users;
}

async function connectSocketIo() {
  const io = new Server(httpServer, {
    cors: {
      origin: ["https://chatlylive.vercel.app", "http://localhost:3000"],
      methods: ["GET", "POST"],
    },
    //W'll try this fix
    transports: ["websocket", "polling"],
  });

  io.use((socket, next) => {
    const userID = socket.handshake.auth.userID;
    const username = socket.handshake.auth.username;
    const email = socket.handshake.auth.email;
    const image = socket.handshake.auth.image;
    if (!username || !email) {
      return next(new Error("invalid username"));
    }
    socket.userID = userID;
    socket.username = username;
    socket.email = email;
    socket.image = image;
    next();
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.username + " " + socket.userID);
    socket.join(socket.userID);
    const users = getActiveUsers(io);
    socket.broadcast.emit("users", users);
    socket.emit("users", users);
    socket.broadcast.emit("new user connected", {
      userID: socket.userID,
      username: socket.username,
    });

    socket.on("send_message", (message, room) => {
      console.log(message);
      console.log("room", room);
      if (!room) {
        socket.broadcast.emit("receive_message", message);
      } else {
        socket.to(room).emit("receive_message", message);
      }
      console.log("user: ", socket.username);
      console.log("id: ", socket.userID);
      console.log("saying: ", message.message);
    });
    socket.on("disconnect", () => {
      const users = getActiveUsers(io);
      socket.broadcast.emit("users", users);
      console.log("user disconnected ", socket.username + " " + socket.userID);
    });
  });
}

module.exports = {
  connectSocketIo,
};
