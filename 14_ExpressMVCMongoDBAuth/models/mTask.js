import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", taskSchema);

const mTask = {
  getAll: async () => {
    try {
      const results = await Task.find();
      return results;
    } catch (err) {
      throw { status: 500, message: "Error al cargar las tareas" };
    }
  },
  getOne: async (id) => {
    try {
      const result = await Task.findById(id);
      return result;
    } catch (err) {
      throw {
        status: 500,
        message: `Error al obtener la tarea con el id ${id}`,
      };
    }
  },
  create: async (task) => {
    try {
      const newTask = new Task(task);
      await newTask.save();
    } catch (err) {
      throw { status: 500, message: "Error al crear la tarea" };
    }
  },
  update: async (task) => {
    try {
      await Task.findByIdAndUpdate(task.id, { title: task.title });
    } catch (err) {
      throw {
        status: 500,
        message: `Error al actualizar la tarea con el id ${task.id}`,
      };
    }
  },
  complete: async (id) => {
    try {
      await Task.findByIdAndUpdate(id, { completed: true });
    } catch (err) {
      throw {
        status: 500,
        message: `Error al completar la tarea con el id ${task.id}`,
      };
    }
  },
  uncomplete: async (id) => {
    try {
      await Task.findByIdAndUpdate(id, { completed: false });
    } catch (err) {
      throw {
        status: 500,
        message: `Error al completar la tarea con el id ${task.id}`,
      };
    }
  },
  delete: async (id) => {
    try {
      await Task.findByIdAndDelete(id);
    } catch (err) {
      throw {
        status: 500,
        message: `Error al eliminar la tarea con el id ${id}`,
      };
    }
  },
};

export default mTask;
