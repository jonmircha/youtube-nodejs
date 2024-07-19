export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    //console.log(req.session);
    return next();
  }
  res.redirect("/login");
};
