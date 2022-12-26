import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import viedoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();

const logger = morgan("dev"); // morgan inform us path, method, etc.

app.use(logger);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", viedoRouter);

const handleListen = () => {
  console.log(`Hello, server open here!! http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
