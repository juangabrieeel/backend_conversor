const mongoose = require("mongoose");

// Configuración de la base de datos
const conexionDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/conversions", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a MongoDB exitosa");
  } catch (err) {
    console.error("Error de conexión a MongoDB: ", err);
  }
};

module.exports = conexionDB;
