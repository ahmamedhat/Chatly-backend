import express from "express";
import cors from "cors";
import { createServer } from "http";

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

export const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});

export default app;
