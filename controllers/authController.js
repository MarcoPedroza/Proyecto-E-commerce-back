// 4- Importar modelo y bcryptjs (para comparar el hash)
const Usuario = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
// 4- Librearia para crear token
const jwt = require("jsonwebtoken");
const { json } = require("express");
// 4- importar dotenv para usar variable de entorno
require("dotenv").config({ path : "variables.env" });


// 4- Crear export para la función autenticar
exports.autenticarUsuario = async (req, res) => {

    // 4- Para poder autenticar: extraer del body password e email
    const { password , email } = req.body;

    // 4- Entrar a la BD y ver si el usuario está registrado
    try{
        // 4- Revisar si el usuario está registrado
        let usuario = await Usuario.findOne({email});

        // 4- Se usa negación: si es False = no existe el usuario
        if(!usuario){
             return res.status(404).json({ msg: "El usuario no existe"});
        }
        // 4- Revisar el password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);

        if(!passwordCorrecto){
            return res.status(400).json({msg: "Password incorrecto"});
        }
        
        // 4- Si todo es correcto: crear y firmar un token 
        const payload = {
            usuario: { id: usuario.id},
        };
            //Validar funcionamiento de autentificación: muestra id
            //res.json(payload);
        
        jwt.sign(
            payload,// = ID usuario
            //llamar variable de entorno 
            process.env.SECRETA,
            {
                expiresIn: '30d', // 1 hora / en dias '30d' = 30 días
            },
            //Visualizar en caso de error
            (error, token) =>{
                if(error) throw error;
                //Mensaje de confirmación (si fue exitoso)
                res.json({ token });
            }
        );

    }catch(error){
        console.log(error);
    }
};

// 5- Crear función usuarioAutenticado (que se llamará tras el next())
exports.usuarioAutenticado = async ( req, res ) => {
    try{
        //Capturar el usuario para poderlo enviar
        const usuario = await Usuario.findById(req.usuario.id);
        //Mostrar después de capturar
        res.json( { usuario });
    }catch(error){
        res.status(500).json({ msg: "Hubo un error de autenticación" });
    }
};