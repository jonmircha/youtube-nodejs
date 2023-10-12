const error404 = (req, res) => {
  res.status(404).json({
    code: 404,
    message: "Not Found",
  });
};

export default {
  error404,
};
