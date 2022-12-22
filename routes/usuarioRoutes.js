// 2- Importar express y router
const express = require("express");
const router = express.Router();

// 3- Importar controller
const usuarioController = require("../controllers/usuariosController");

// 2- Crear ruta
router.post (
    "/",
    // 3- LLamar función para crear (post)
    usuarioController.crearUsuario
);

/*
Pruebas de rutas

router.get ("/", (req,res) => {
    res.json({msg: "Get desde el router"});
});

router.post ("/", (req,res) => {
    res.json({msg: "Post desde el router"});
});

router.put ("/", (req,res) => {
    res.json({msg: "Put desde el router"});
});

router.delete ("/", (req,res) => {
    res.json({msg: "Delete desde el router"});
});*/

// 2- Exportar - Definir las rutas
module.exports = router;