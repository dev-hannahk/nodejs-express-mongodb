import express from "express";
import {
  deleteVideo,
  edit,
  see,
  upload,
} from "../controllers/videoControllers";

const viedoRouter = express.Router();

// id로 인식하기 때문에 가장 최상단에 위치해야함
// viedoRouter.get("/upload", upload);
// id는 숫자만 받을 수 있도록 정규식 적용. 따라서, upload 라우터가 id에 영향을 받지 않음
// id 객체를 params로 받을 수 있도록 key를 id로 설정
viedoRouter.get("/:id(\\d+)", see);
viedoRouter.get("/:id(\\d+)/edit", edit);
viedoRouter.get("/:id(\\d+)/delete", deleteVideo);
viedoRouter.get("/upload", upload);

export default viedoRouter;
