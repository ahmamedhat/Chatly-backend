const express = require("express");
const cors = require("cors");
const { createServer } = require("http");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});

module.exports = {
  app,
  httpServer,
};
