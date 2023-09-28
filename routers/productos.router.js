import express from 'express'
import { 
    actualizarProducto,
    borrarProductoPorId,
    crearProducto, 
    obtenerProductoPorId, 
    obtenerTodosLosProductos 
} from '../controllers/productos.controller.js'
const productosRouter = express.Router() // Express me permite extraer las rutas de mi aplicación principal

// ! RUTAS

// http://localhost:8081/api/productos/
// ? CRUD => R:READ -> Verbo GET ALL (Listar todos los productos)
productosRouter.get('/', obtenerTodosLosProductos)

// ? CRUD => R:READ -> Verbo GET ONE (Listar un producto)
productosRouter.get('/:id', obtenerProductoPorId)

// ? CRUD => C:CREATE -> Verbo POST (Crear un producto)
productosRouter.post('/', crearProducto)

// http://localhost:8081/api/productos/:id
// ? CRUD => U:UPDATE -> Verbo PUT (Actualizar un producto)
productosRouter.put('/:id', actualizarProducto)

// ? CRUD => D:DELETE -> Verbo DELETE (Borrar un producto)
productosRouter.delete('/:id', borrarProductoPorId)

export default productosRouter