import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import viedoRouter from "./routers/videoRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

const logger = morgan("dev"); // morgan inform us path, method, etc.

//express 가 views라는 폴더를 바라봄
app.set("view engine", "pug");
// src 디렉토리 안의 views 폴더를 바라볼 수 있도록 셋팅
app.set("views", process.cwd() + "/src/views");
app.use(logger);
// express 내장 미들웨어
// urlencoded payload(전송된 데이터) 파싱
// application/x-www-form-urlencoded 파싱 (form data 파싱)
// https://expressjs.com/ko/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// server is giving browser a session id
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);

// app.use((req, res, next) => {
//  // can see all users session state
//   req.sessionStore.all((error, sessions) => {
//     console.log(sessions);
//     next();
//   });
// });

// app.get("/add-one", (req, res, next) => {
//   return res.send(`${req.session.id}`);
// });

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", viedoRouter);

export default app;
