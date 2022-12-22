// Conexión con la Base de Datos
// 1- Importar mongoose
const mongoose = require ("mongoose");

// 1- Crear función con estructura try-catch 
const conectarDB = async () => {
    try{
        const connection = await mongoose.connect(
            //Cadena de conexión BD
            "mongodb+srv://MarcoP:1012451983@cluster0.zpi5xgh.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        //Parar proceso de conexión si se genera error
        process.exit(1);
    }
};

// 1- Exportar módulo: se importa en index.js
module.exports = conectarDB;