//Verificar token
// 5- Impotar jsonwebtoken
const jwt = require("jsonwebtoken");

// 5- Crear module y llamar req, res, y next
module.exports = function (req, res, next){
    // 5- Leer el token desde el header o desde el postman
    const token = req.header("x-auth-token");
        //Pueba de funcionamiento 
        //console.log(token);

    // 5- Revisar si no hay un token
    if(!token){
        return res.status(400).json({ msg: "No hay token" });
    }

    // 5- Validar token (si es el mismo creado)
    try{
        // Vefificar si es el mismo token creado: compara componentes con los que se creó
        const cifrado = jwt.verify( token, process.env.SECRETA)
        // Enviar usuario para el que está asignado el token (identificar usuario) 
        req.usuario  = cifrado.usuario;
            //Pueba funcionamiento 
            //console.log(cifrado.usuario);
        next();
    }catch(error){
        res.status(400).json({ msg: "Token no válido" });
    }
};