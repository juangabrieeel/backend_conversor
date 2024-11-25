const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const conversionRoutes = require("./routes/conversionRoutes");
const conexionDB = require("./config/db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión con la base de datos
conexionDB();

// Rutas
app.use("/api", conversionRoutes);

// Iniciar el servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
