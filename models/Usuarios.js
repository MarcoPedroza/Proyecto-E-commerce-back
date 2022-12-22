// Creación de modelos
// 2- Importar mongoose
const mongoose = require("mongoose");

// 2- Crear schema (Modelo) / atributos y propiedades
const UsuariosShema = mongoose.Schema ({
    nombre:{ type: String, required: true, trim: true },
    email:{ type: String, required: true, trim: true, unique: true },
    password:{ type: String, required: true, trim: true },
    registro:{type: Date, default: Date.now() }
}); 

// 2- Definir y exportar modelo 
module.exports = mongoose.model("Usuarios", UsuariosShema);
