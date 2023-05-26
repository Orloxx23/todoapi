const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
  const data = {
    nombre: "Lista de tareas",
    description: "Aplicación para la gestión de tareas",
    tecnologias: {
        frontend: ["Java", "Retrofit"],
        backend: ["Nodejs", "Express", "Mongoose", "MongoDB"],
    },
    integrantes: [
        "Gicela Dominguez",
        "Jeffrey Velez",
        "Juan Estrada",
        "Orlando Mina"
    ],
    endpoints: {
        get: {
            "/api/todos": "Obtener todas las tareas",
        },
        post: {
            "/api/todos": "Crear una nueva tarea",
        },
        put: {
            "/api/todos/:id": "Actualizar una tarea existente",
        },
        delete: {
            "/api/todos/:id": "Eliminar una tarea",
        },
    },
    
  };
  res.json(data);
});

module.exports = router;
