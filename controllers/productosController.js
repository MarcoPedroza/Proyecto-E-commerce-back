// Crear controllers
// 6- Importar el modelo
const Productos = require("../models/Productos");
const Categorias = require("../models/Categorias");


// 6- Crear exports con cada una de las funciones
exports.obtenerProducto = async (req, res) => {
    //res.status(200).json({ msg: "Obtener Producto" });

    const { id } = req.params;
    const producto = await Productos.find().where("categoriaId").equals(id);
    res.json(producto);

};

exports.obtenerProductosHome = async (req, res) => {
    try{
        const productos = await Productos.find();
        res.json({ productos });
    }catch(error){
        console.log(error);
    }
};

exports.crearProducto = async (req, res) => {
   /* //res.status(200).json({ msg: "Crear Producto" });

    const { nombre } = req.body;

    try{
        let producto = await Productos.findOne({ nombre });
        //Si existe
    if(producto){
        return res.status(400).json({ msg: "El producto ya existe" });
    }

       // await Productos.findOne({ _id: req.params.id });
        producto = new Productos(req.body);
        //producto.categoriaId = req.categoria.id;
        producto.categoriaId = await Categorias.findOne({ _id: req.params.id });
        producto.save();
        res.json(producto);
        //console.log(producto);
    }catch(error){
        console.log(error);
    }
    */
   try{
    const producto = new Productos (req.body);
    producto.save();
    res.json(producto);
   }catch(error){
    console.log(error);
   }
};

exports.actualizarProducto = async (req, res) => {
    //res.status(200).json({ msg: "Actualizar Producto" });
};

exports.borrarProducto = async (req, res) => {
    //res.status(200).json({ msg: "Borrar Producto" });
};