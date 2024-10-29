const express = require("express");
const path = require("path");
const app = express();

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Ruta para el archivo index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// Ruta para el archivo index2.html
app.get("/index2", (req, res) => {
    res.sendFile(path.join(__dirname + "/index2.html"));
});

// Ruta para el archivo index3.html (si tienes otro archivo más)
app.get("/index3", (req, res) => {
    res.sendFile(path.join(__dirname + "/index3.html"));
});

const port = 3056;
app.listen(port, () => {
    console.log(`El servidor se está ejecutando en http://localhost:${port}`);
});