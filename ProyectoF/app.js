//Modulos de node 
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

// Instanciar 
const app = express();

// Puerto
const port = 3008;

// Middleware para analizar datos de formularios
app.use(express.urlencoded({ extended: false }));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Configurar carpeta pública
app.use(express.static('public')); // Línea de código para cargar los estilos desde la carpeta public

// Configuración para la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pweb2',
    port: '3306'
});

// Conexión a la base de datos
db.connect(error => {
    if (error) {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    } else {
        console.log(`Conexión a la base de datos establecida correctamente.`);
    }
});

// Mostrar lista de usuarios
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.log(`Error al recuperar datos: ${err}`);
            res.send('Error en recuperar datos');
        } else {
            res.render('index', { users: results });
        }
    });
});

// Agregar usuario
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (nombre, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error(`Error al insertar usuario -> ${err}`);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Editar usuario: este codigo solo será para visualizar la bd, para modificar los registros necesitamos generar otro app.get que entregue un query con update 
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';//Query que manda a llamar los registros de la BD   
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error en la db');
            res.send('Error en la DB :((');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

// Ruta para actualizar un usuario existente
app.post('/update/:id', (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde la URL
    const { name, email } = req.body; // Manda a llamar los datos del formulario 
    const query = 'UPDATE users SET nombre = ?, email = ? WHERE id = ?'; //Query para la modificacion de el registro seleccionado de la bd 

    db.query(query, [name, email, id], (err) => {
        if (err) {
            console.error(`Error al actualizar usuario -> ${err}`); 
            res.send('Error al actualizar'); // Respuesta en caso de error
        } else {
            res.redirect('/'); // Redirigir a la página principal después de actualizar
        }
    });
});

// Eliminar un usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde la URL
    const query = 'DELETE FROM users WHERE id = ?'; //Creamos la consulta que se ejecutara y eliminara el registro 

    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error al eliminar usuario:', err); 
            res.send('Error al eliminar'); // Respuesta en caso de error
        } else {
            res.redirect('/'); // Redirigir a la página principal después de eliminar
        }
    });
});

// Server
app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
