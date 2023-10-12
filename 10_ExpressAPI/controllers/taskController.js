let tasks = [
  { id: 1, title: "Tarea 1", completed: false },
  { id: 2, title: "Tarea 2", completed: true },
];

const getAllTasks = (req, res) => {
  res.json({ tasks });
};

const getTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    res.json({ task: tasks[taskIndex] });
  }
};

const addTask = (req, res) => {
  let { title } = req.body;

  if (!title) {
    res.status(404).json({ err: true, message: "Falta el título de la tarea" });
  } else {
    let id = tasks.length + 1;
    tasks.push({ id, title, completed: false });
    res.json({ err: false, message: "Tarea agregada" });
  }
};

const editTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    tasks[taskIndex].title = req.body.title;
    res.json({ err: false, message: "Tarea editada" });
  }
};

const completeTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = true;
    res.json({ err: false, message: "Tarea completada" });
  } else {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  }
};

const uncompleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let task = tasks.find((task) => task.id === id);

  if (task) {
    task.completed = false;
    res.json({ err: false, message: "Tarea no completada" });
  } else {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  }
};

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    res.status(404).json({ err: true, message: "Tarea no encontrada" });
  } else {
    tasks.splice(taskIndex, 1);
    res.json({ err: false, message: "Tarea eliminada" });
  }
};

export default {
  getAllTasks,
  getTask,
  addTask,
  editTask,
  completeTask,
  uncompleteTask,
  deleteTask,
};
