// Crear controllers
// 6- Importar el modelo
const { json } = require("express");
const Categorias = require("../models/Categorias");

// 6- Crear exports con cada una de las funciones
//Devuelve todas las categorias
exports.obtenerCategoria = async (req, res) => {
    //Prueba de funcionamiento:
    //res.status(200).json({ msg: "Obtener categoria" });
    try{
        //usar find para buscar las categorias que el usuario creó (= a un filtro)
        //await espera tiempo de búsqueda
        const categoria = await Categorias.find({ creador: req.usuario.id });
        //Devolver las categorías
        res.json({ categoria });
    }catch(error){
        console.log(error);
    }
};

exports.obtenerCategoriaId = async (req, res) =>{
    const {id} = req.params
    try{
        const categoria = await Categorias.findById(id);
        res.json({categoria});
    }catch(error){
        console.log(error);
    }
};

exports.obtenerCategoriaHome = async (req, res) => {
    try{
        const categoria = await Categorias.find();
        res.json({ categoria });
    }catch(error){
        console.log(error);
    }
};

exports.crearCategoria = async (req, res) => {
    
    try{ 
        //Crear categoria (leer objeto por el body)
        const categoria = new Categorias(req.body);
        //Extraer el id
        categoria.creador =req.usuario.id; 
        //Crear
        categoria.save();
        //Devolverlo para leerlo
        res.json(categoria);
    }catch(error){
        console.log(error);
    }
};

exports.actualizarCategoria = async (req, res) => {
    //  Validar que la categoría a actualizar existe
    //Capturar el ID
    const { id } = req.params;
    //Buscar por id para ver si existe o no 
    const categoria =await Categorias.findById(id);

    //Si no existe
    if(!categoria){
        return res.status(400).json({ msg: "Categoría no encontrada" });
    }

    //Que un usuario no pueda actualizar categorías que no ha construido
    if(categoria.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg: "Acción no válida para este usuario" });
    }

    //actualizar atributo con lo que trae por el body o categoria nombre
    categoria.nombre = req.body.nombre || categoria.nombre;
    categoria.imagen = req.body.imagen || categoria.imagen;

    categoria.save();

    //Devovler categoria actualizada
    res.json({ categoria });
};

exports.borrarCategoria = async (req, res) => {
    try{
        // Fundión: borrar por id
        // Params viene por el req 
        await Categorias.deleteOne({ _id: req.params.id });
        res.json({ msg: "Categoria eliminada" });
    }catch(error){
        console.log(error);
    }
};

