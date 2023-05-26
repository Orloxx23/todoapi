const { Router } = require("express");
const Todo = require("../models/todo");
const router = new Router();

// Obtener todas las tareas
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
});

// Crear una nueva tarea
router.post("/todos", async (req, res) => {
  try {
    const { id, name, description, date, time } = req.body;
    const todo = new Todo({
      id,
      name,
      description,
      date,
      time,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al crear la tarea", description: error.message });
  }
});

// Actualizar una tarea existente
router.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, date, time, status } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { name, description, date, time, status },
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error al actualizar la tarea",
        description: error.message,
      });
  }
});

// Eliminar una tarea
router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error al eliminar la tarea",
        description: error.message,
      });
  }
});

module.exports = router;
