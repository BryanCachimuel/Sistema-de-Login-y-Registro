const mongoose = require("mongoose");

const mongo_url = 'mongodb://localhost/sistemalr';

const db = async () => {
    await mongoose.connect(mongo_url)
    .then(() => console.log('Conexión hacia la base de datos exitoso'))
    .catch((error) => console.error(error));
};

module.exports = db