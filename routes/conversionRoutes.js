const express = require("express");
const router = express.Router();
const Conversion = require("../models/Conversion"); // Importa tu modelo

// Crear una nueva conversión
router.post("/conversions", async (req, res) => {
  const { inputValue, outputValue, conversionType } = req.body;

  // Comprueba que los datos estan completos
  if (!inputValue || !outputValue || !conversionType) {
    return res.status(400).json({ message: "Datos incompletos." });
  }
  // Crea la nueva conversión y si da error lanza un mensaje
  try {
    const newConversion = new Conversion({
      inputValue,
      outputValue,
      conversionType,
    });
    await newConversion.save();
    res.status(201).json({ message: "Conversión guardada exitosamente." });
  } catch (error) {
    console.error("Error al guardar en la base de datos:", error);
    res.status(500).json({ message: "Error al guardar en la base de datos." });
  }
});

// Obtener todas las conversiones de la bd
router.get("/conversions", async (req, res) => {
  try {
    const conversions = await Conversion.find();
    res.status(200).json(conversions);
  } catch (error) {
    console.error("Error al obtener las conversiones:", error);
    res.status(500).json({ message: "Error al obtener las conversiones." });
  }
});

// Eliminar una conversión buscandola por su id
router.delete("/conversions/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Conversion.findByIdAndDelete(id);
    res.status(200).json({ message: "Conversión eliminada exitosamente." });
  } catch (error) {
    console.error("Error al eliminar la conversión:", error);
    res.status(500).json({ message: "Error al eliminar la conversión." });
  }
});

module.exports = router;
