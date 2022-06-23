const bcrypt = require('bcrypt');
const Usuario = require("../models/usuario")

const login = async (req, res) => {
    const { correo, contrasenia } = req.body;

    Usuario.findOne({correo}).then((usuario) => {
        if(!usuario){
            return res.json({mensaje: "Usuario no encontrado"})
        }

        // comparación de la contrasenia declara aquí con la contrasenia almacenada en la base de datos
        bcrypt.compare(contrasenia, usuario.contrasenia).then((escorrecta) => {
            if(escorrecta){
                const { id, nombre } = usuario;
                res.json({ mensaje: "Usuario logeado correctamente", 
                usuario:{
                    id,
                    nombre,
                },
            });
            }else{
               return res.json({ mensaje: "Contraseña incorrecta" })
            }
        });
    });
};

module.exports = login