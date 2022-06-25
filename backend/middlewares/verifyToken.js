/* creamos la carpeta middlewares para hacer la validació del token para los usuarios */
const jwt = require('jsonwebtoken')

// la palabra [tokenusuario] hace énfasis a una palabra reservada para hacer el llamado al token
const verifyToken = (req, res , next) => {
    const token = req.headers['tokenusuario']
    
    /* se debe poner la misma palabra 'secreto' emitida en el archivo login */
    if(token){
        jwt.verify(token, 'secreto', (error, data) => {
            if(error) return res.status(400).json({mensaje: "Token Invalido"});
            else{
                req.user = data
                next()
            }
        })
    }else{
        res.status(400).json({mensaje: "Debes enviar un token"})
    }
}

module.exports = verifyToken