//Crear routers
// 6- Importar express y espress,Routers
const express = require("express");
const router = express.Router();
// 6- Impotar middleware
const authMidd = require("../middleware/authMidd");
// 6- Impotar controller
const categoriasController = require("../controllers/categoriasController");


// 6- Crear rutas para el CRUD
    //Adicionar middleware (usuario autenticado para hacer cualquier acción)
    //LLamar funciones creadas en el controller
    router.get("/", categoriasController.obtenerCategoriaHome);

    router.get("/", authMidd, categoriasController.obtenerCategoria);
//Obtener categoría por ID
router.get("/:id", authMidd, categoriasController.obtenerCategoriaId);
router.post("/", authMidd, categoriasController.crearCategoria);
router.put("/:id", authMidd, categoriasController.actualizarCategoria);
router.delete("/:id", authMidd, categoriasController.borrarCategoria);


// 6- Exportar y definir rutas
module.exports = router;