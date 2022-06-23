const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers = require('./controllers/index')


const app = express();

app.use(cors());
app.use(express.json());

app.get('/usuario/:userId', controllers.getUserById)
app.post('/registro', controllers.registro)
app.post('/login', controllers.login)

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
    console.log(db());
});

module.exports = app;