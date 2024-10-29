const express = require("express");
const path = require("path");
const router = express.Router();

// Ruta inicial para mostrar mensaje de inicio
router.get("/", (req, res) => {
    res.send("Hola, para cambiar de ruta es a traves de la barra de navegacion, /bienvenida, /quienes, /contacto");
});

// Ruta para la página de bienvenida
router.get("/bienvenida", (req, res) => {
    res.sendFile(path.join(__dirname, 'bienvenida.html'));
});

// Ruta para la página "Quiénes Somos"
router.get("/quienes", (req, res) => {
    res.sendFile(path.join(__dirname, 'quienes.html'));
});

// Ruta para la página de contacto
router.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, 'contacto.html'));
});

module.exports = router;
