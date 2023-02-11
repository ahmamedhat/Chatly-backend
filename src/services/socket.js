const { Server } = require("socket.io");

async function connectSocketIo(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("a user connected", socket);
  });
}

module.exports = {
  connectSocketIo,
};
