const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
    nombre: { type: String, require: true },
    correo: { type: String, require: true, unique: true },
    contrasenia : { type: String, require: true }
});

module.exports = model("Usuario", UsuarioSchema);