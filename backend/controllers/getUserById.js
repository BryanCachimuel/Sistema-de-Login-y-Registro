const Usuario = require("../models/usuario")

/*
    Si no se pone esto usuario._doc no se obtiene los datos como nombre y correo
*/
const getUserById = async (req, res) => {
    //const { userId } = req.params;
    const { id } = req.user

    if(id.length === 24){
        Usuario.findById(id).then((Usuario) => {
            if(!Usuario){
                return res.json({mensaje: "Usuario no encontrado"});
            }else{
                const {_id, contrasenia,__v,...resto} = Usuario._doc
                res.json(resto)
            }
        });
    }else{
        res.json({mensaje: "Estas enviando datos incorrectos"});
    }
}

module.exports = getUserById