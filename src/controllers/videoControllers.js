import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    return res.render("server-error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;

  return res.render("watch", { pageTitle: `Watch` });
};

export const getEdit = (req, res) => {
  const { id } = req.params;

  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // req.body에는 form을 통해 submit된 data의 key-value값을 가짐
  // default = undefined
  // express.json() or express.urlencoded() 파싱을 통해 값을 받아올 수 있음
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  // here we will add a video to the videos array.
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map((hashtag) => `#${hashtag}`),
    });
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }

  // await Video.save() is also possilbe to save documents.
  // 'create' method is easy way to save documents.
  // 'create' method triggers 'save' method which is next middleware.

  // why collection name is videos.
  // cause mongoose automaticaally finds model and create collection taking model's name with lowercase and adding 's' to the end.
  return res.redirect("/");
};
