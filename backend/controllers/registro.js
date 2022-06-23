const bcrypt = require("bcrypt")
const Usuario = require("../models/usuario")


const registro = async (req, res) => {
    const { nombre, correo, contrasenia } = req.body;
    Usuario.findOne({correo}).then((usuario) => {
        if(usuario){
          return res.json({mensaje: "Usuario existente con el mismo correo"});
        }else if(!nombre || !correo || !contrasenia){
          return res.json({mensaje: "No ha ingresado el nombre o correo o contrasenia"})
        }else{
            bcrypt.hash(contrasenia, 10, (error, contraseniaHasheada) => {
                if(error) res.json({error})
                else{
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contrasenia: contraseniaHasheada
                    });

                    nuevoUsuario.save()
                    .then((usuario) => {
                        res.json({mensaje: "Usuario creado correctamente", usuario})
                    })
                    .catch((error) => console.error(error));
                }
            })
        }
    })
}

module.exports = registro