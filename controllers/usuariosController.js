// 3- Importar modelo
const Usuario = require("../models/Usuarios");
// 3- Importar libreria para encriptar el password
const bcryptjs = require("bcryptjs");

// 3- Crear función / async: cuando la respuesta no es inmediata (se debe esperar un tiempo entre las apis)
exports.crearUsuario = async (req, res) => {
    //Prueba /Leer datos: req / Enviar datos: res
        //console.log(req.body);
        //res.json({msg:"Post desde el controller"})

    // 3- Extraer password para encriptar
    // 4- Extraer email para verificar
    const { password, email } = req.body;

    // 3- Se emplea estructura try cuando se envía mensajería 
    try{
        // 4- Revisar que sea un único usuario registrado (por email según el modelo)
        let usuario = await Usuario.findOne({ email });

        // 4- Condiciona l: si es True (usuario ya existe)
        if (usuario) {
            return res.status(404).json({ msg : "El usuario ya existe"});
        }

        // 3- Crear el nuevo usuario
        usuario = new Usuario(req.body);

        // 3- hash para el password 
        usuario.password = await bcryptjs.hash(password, 10);

        // 3- Guardar en la BD
        const usuarioAlmacenado = await usuario.save();

        // 3- Se envía por res.json
        res.json(usuarioAlmacenado);

    }catch(error){
        console.log(error)
    }
};

