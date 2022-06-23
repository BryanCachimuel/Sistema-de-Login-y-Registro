const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3005;

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});

module.exports = app;