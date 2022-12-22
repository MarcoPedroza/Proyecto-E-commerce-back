// 4- Importar express, router y authcontroller 
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController")
// 5- Importar middleware
const authMidd = require("../middleware/authMidd");

// 4- Crear ruta para la autentificación y exportar 
    //mismo estandar que cuando se crea usuariosRoutes
router.post (
    "/",
    authController.autenticarUsuario
);

// 5- Crear ruta para el middleware
    //Segunda función se ejecuta con el next() con el que finaliza authMidd
router.get (
    "/",
    authMidd, authController.usuarioAutenticado
);

module.exports = router;