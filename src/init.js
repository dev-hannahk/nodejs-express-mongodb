import "./db"; // just import db file
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListen = () => {
  console.log(`Hello, server open here!! http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
