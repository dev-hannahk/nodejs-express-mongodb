let videos = [
  {
    id: 1,
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
  },
  {
    id: 2,
    title: "Second Video",
    rating: 3,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
  },
  {
    id: 3,
    title: "Third Video",
    rating: 4,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("watch", { pageTitle: `Watch: ${video.title}`, video });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  // req.body에는 form을 통해 submit된 data의 key-value값을 가짐
  // default = undefined
  // express.json() or express.urlencoded() 파싱을 통해 값을 받아올 수 있음
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  // here we will add a video to the videos array.
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
