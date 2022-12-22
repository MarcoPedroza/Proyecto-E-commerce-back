//Crear routers
// 6- Importar express y espress,Routers
const express = require("express");
const router = express.Router();
// 6- Impotar middleware
const authMidd = require("../middleware/authMidd");
// 6- Impotar controller
const productosController = require("../controllers/productosController");

// 6- Crear rutas para el CRUD
    //Adicionar middleware (usuario autenticado para hacer cualquier acción)
    //LLamar funciones creadas en el controller
    router.get("/",  productosController.obtenerProductosHome);

    router.get("/:id", authMidd, productosController.obtenerProducto);

router.post("/", authMidd, productosController.crearProducto);
router.put("/:id", authMidd, productosController.actualizarProducto);
router.delete("/:id", authMidd, productosController.borrarProducto);

// 6- Exportar y definir rutas
module.exports = router;