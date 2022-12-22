// 1- Importar express 
const express = require("express");
// 1- Importar archivo de conexión a DB
const conectarDB = require("./config/db");
const usuarioRouters = require("./routes/usuarioRoutes");
const categoriasRouters = require("./routes/categoriasRouters");
const productosRouters = require("./routes/productosRouters");
const auth = require("./routes/auth");
// 7- Importar CORS (comunicar back y front)
const cors = require("cors");

// 1- Llamar a la variable express
const app = express ();

// 1- Función que conecta a la BD
conectarDB();

// 7- Habilitar cors
app.use(cors());

// 2- Habilitar expresiones tipo json para definir las rutas (los deje pasar de capa en capa)
app.use(express.json({ extended: true }));

// 2- Definición de Rutas estandarizadas
    //propiedad .use permite establecer espacio de la url (mapeo)
    //Ruta (Endpoint) puede contener varios verbos (GET, POST, PUT, DELETE)
app.use("/api/usuarios", usuarioRouters);

// 4- Ruta para autenticar usuario
app.use("/api/auth", auth );

// 6- Ruta para CRUD categorias
app.use("/api/categorias", categoriasRouters);

// 6- Ruta para CRUD productos
app.use("/api/productos", productosRouters);


// 1- Escuchay y levantar el servicio (Asignar un puerto de escucha)
app.listen(4000, ()=>{
    console.log("servidor corriendo proyectoG12")
});
