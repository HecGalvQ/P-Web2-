const express = require("express");
const path = require("path");
const pagesRutes = require("./routes/pages");

const app = express();
const PORT = 3017;

app.use(express.static('public'));

app.use('/',pagesRutes);
app.get('/', (req, res)=> {
    res.redirect('/index');
});


app.listen(PORT, ()=> {
    console.log(`Escuchando desde http://localhost:${PORT}`)
});