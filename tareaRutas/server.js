const express = require("express");
//const router = express.Router();
const app = express();
const port = 3010;
const routes = require("./routes");
app.use(express.static('public')); // Sirviendo la carpeta "public"
app.use("/", routes);
app.listen(port, () =>{
    console.log(`Servidor se escucha desde http://localhost:${port}`)
});


//Tarea generar 3 paginas html y css de maneta interna bienvenida, quienes somos, contacto puerto 3010 y con diagonal navegar 3310/contacto, 3310/bienvenida codigo en git, capturas terminal funcionando y cap de funcionamiento.  
//npm gestor de paquetes 