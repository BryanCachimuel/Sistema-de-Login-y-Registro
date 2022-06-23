const Usuario = require("../models/usuario")

/*
    Si no se pone esto usuario._doc no se obtiene los datos como nombre y correo
*/
const getUserById = async (req, res) => {
    const { userId } = req.params;
    if(userId.length === 24){
        Usuario.findById(userId).then((usuario) => {
            if(!usuario){
                return res.json({mensaje: "Usuario no encontrado"});
            }else{
                const {_id, contrasenia,__v,...resto} = usuario._doc
                res.json(resto)
            }
        });
    }else{
        res.json({mensaje: "Estas enviando datos incorrectos"});
    }
}

module.exports = getUserById