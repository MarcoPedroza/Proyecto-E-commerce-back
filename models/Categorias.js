// Creación de modelos
// 5- Importar mongoose
const mongoose = require("mongoose");

// 5- Crear schema (Modelo) / atributos y propiedades
const CategoriasShema = mongoose.Schema ({
    nombre: { type: String, required: true, trim: true },
    imagen: { type: String, required: true, trim: true },
    //relación con otras tablas: señala ObjectId del usuario que crea la categoria 
        //ref = referencia del lugar del que viene: Modelo Usuarios
    creador: {type: mongoose.Schema.Types.ObjectId, ref: "Usuarios"},
    creado: {type: Date, default: Date.now() }
}); 

// 5- Definir y exportar modelo 
module.exports = mongoose.model("Categorias", CategoriasShema);
