const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const welcome = require("./routes/welcome");

const app = express();

app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de Mongoose
mongoose
  .connect(
    "mongodb+srv://orminamadro:81Aa2GYWFkPJnvZ4@todoapp.hbnvwzs.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado a la base de datos MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

// Rutas
app.use("/api", require("./routes/index"));
app.use("/", welcome);

// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
