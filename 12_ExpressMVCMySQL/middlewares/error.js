const error = {
  e404: (req, res) => {
    res.status(404).render("error", {
      title: "Error 404 Not Found",
      message: "El recurso que estás buscando no existe.",
    });
  },
  e500: (req, res, err) => {
    res.status(500).render("error", {
      title: "Error 500 Internal Server",
      message: err.message,
    });
  },
};

export default error;
