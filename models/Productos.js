// Creación de modelos
// 5- Importar mongoose
const mongoose = require("mongoose");

// 5- Crear schema (Modelo) / atributos y propiedades
const ProductosShema = mongoose.Schema ({
    nombre:{ type: String, required: true, trim: true, unique: true },
    descripcion:{ type: String, required: true, trim: true },
    stock:{ type: Number, required: true, trim: true },
    precio:{ type: Number, required: true, trim: true },
    imagen:{ type: String, required: true, trim: true },
    creado: {type: Date, default: Date.now() },
    categoriaId:{type: mongoose.Schema.Types.ObjectId, ref: "Categorias"}
}); 

// 5- Definir y exportar modelo 
module.exports = mongoose.model("Productos", ProductosShema);