import express from "express";
import {
  deleteVideo,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  watch,
} from "../controllers/videoControllers";

const viedoRouter = express.Router();

// 숫자만 들어오는 정규식을 제거하면 upload 경로를 id로 착각하기 떄문에 가장 맨 위에 위치해야 함
// viedoRouter.route("/upload").get(getUpload).post(postUpload);
// id로 인식하기 때문에 가장 최상단에 위치해야함
// viedoRouter.get("/upload", upload);
// id는 숫자만 받을 수 있도록 정규식 적용. 따라서, upload 라우터가 id에 영향을 받지 않음
// id 객체를 params로 받을 수 있도록 key를 id로 설정
// /[0-9a-f]{24}/ REGEX <- mongodb id가 16진수 24바이트 (Can be a 24 byte hex string)
viedoRouter.get("/:id([0-9a-f]{24})", watch);
// viedoRouter.get("/:id(\\d+)/edit", getEdit);
// viedoRouter.post("/:id(\\d+)/edit", postEdit);
viedoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
viedoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
viedoRouter.route("/upload").get(getUpload).post(postUpload);

export default viedoRouter;
