export const localsMiddleware = (req, res, next) => {
  // res.locals
  // requeset 범위가 지정된 response 로컬 변수를 포함하는 객체이므로
  // req, res 주기동안 렌더링된 view에서만 사용 가능
  // ex. pug, ejs 같은 템플릿 엔진
  //   if (req.session.loggedIn) {
  //     res.locals.loggedIn = true;
  //   }
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
