import mTask from "../models/mTask.js";
import error from "../middlewares/error.js";

const cTask = {
  getAll: async (req, res) => {
    try {
      let tasks = await mTask.getAll();
      console.log(tasks);
      res.render("index", { title: "Lista de Tareas", tasks });
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  getAddForm: (req, res) => {
    res.render("task-add", { title: "Agregar Tarea" });
  },
  getEditForm: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      let task = await mTask.getOne(id);

      if (!task) {
        error.e404(req, res);
      } else {
        res.render("task-edit", { title: "Editar Tarea", task });
      }
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  create: async (req, res) => {
    try {
      let { title } = req.body;
      await mTask.create({ title });
      res.redirect("/");
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  update: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      let title = req.body.title;
      await mTask.update({ id, title });
      res.redirect("/");
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  complete: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      await mTask.complete(id);
      res.redirect("/");
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  uncomplete: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      await mTask.uncomplete(id);
      res.redirect("/");
    } catch (err) {
      error.e500(req, res, err);
    }
  },
  delete: async (req, res) => {
    try {
      let id = parseInt(req.params.id);
      await mTask.delete(id);
      res.redirect("/");
    } catch (err) {
      error.e500(req, res, err);
    }
  },
};

export default cTask;
