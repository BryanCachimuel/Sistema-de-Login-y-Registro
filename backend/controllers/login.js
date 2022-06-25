const bcrypt = require('bcrypt');
const Usuario = require("../models/usuario");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { correo, contrasenia } = req.body;

    Usuario.findOne({correo}).then((Usuario) => {
        if(!Usuario){
            return res.json({mensaje: "Usuario no encontrado"})
        }

        // comparación de la contrasenia declara aquí con la contrasenia almacenada en la base de datos
        bcrypt.compare(contrasenia, Usuario.contrasenia).then((escorrecta) => {
            if(escorrecta){
                const { id, nombre } = Usuario;

                /* esto es lo que va a tocar el token */
                const data = {
                    id,
                    nombre
                }

                /* el token expira en 24 horas */
                const token = jwt.sign(data, 'secreto', {
                    expiresIn: 86400 
                })

                /* se agrega el token para cada usuario logeado */
                res.json({ mensaje: "Usuario logeado correctamente", 
                Usuario:{
                    id,
                    nombre,
                    token,
                },
            });
            }else{
               return res.json({ mensaje: "Contraseña incorrecta" })
            }
        });
    });
};

module.exports = login