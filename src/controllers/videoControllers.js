const fakeUser = {
  username: "Hannah",
  loggedIn: false,
};

export const trending = (req, res) => {
  // const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const videos = [];
  const videos = [
    {
      id: 1,
      title: "Video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      id: 2,
      title: "Video #2",
      rating: 3,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
    {
      id: 3,
      title: "Video #3",
      rating: 4,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
    },
  ];
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
