import User from "../models/User";
import bcrpyt from "bcrypt";

export const getJoin = async (req, res) =>
  res.render("join", { pageTitle: "Create Account" });

export const postJoin = async (req, res) => {
  const pageTitle = "Join";
  const { name, username, email, password, password2, location } = req.body;
  // $or oprator
  // { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }
  // db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  try {
    await User.create({ name, username, email, password, location });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};
export const getLogin = (req, res) => {
  const pageTitle = "Login";
  return res.render("Login", { pageTitle });
};

export const postLogin = async (req, res) => {
  const pageTitle = "Login";
  const { username, password } = req.body;
  // check if account exists
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "An account with this username does not exists.",
    });
  }
  // check if password correct
  const match = await bcrpyt.compare(password, user.password);
  if (!match) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password.",
    });
  }
  // add user info to session
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};

export const logout = (req, res) => res.send("Logout User");
export const see = (req, res) => res.send("See User");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
