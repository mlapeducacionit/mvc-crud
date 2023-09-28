
import model from "../models/productos.model.js"

// El obtener todos los productos
export const obtenerTodosLosProductos = (req, res) => {
    const productos = model.leerProductos()
    res.status(200).json(productos)
}

// Obtener productos por ID
export const obtenerProductoPorId = (req, res) => {
    let id = req.params.id
    const producto = model.leerProducto(id)
    res.status(200).json({ok: true, producto})
}

// Crear producto
export const crearProducto = (req, res) => {
    console.log(req.body) // <= Info que me llega del formulario
    const producto = req.body 
    const productoCreado = model.crearProducto(producto)
    console.log(productoCreado)
    res.status(201).redirect('/') // método de express que me redirecciona al lugar que yo quiera.
}

// Actualizar producto
export const actualizarProducto = (req, res) => {
    let id = req.params.id // params => {}
    let producto = req.body
    producto.id = id
    const productoActualizado = model.actualizarProducto(id, producto)
    res.json(productoActualizado)
}

// Borrar producto
export const borrarProductoPorId = (req, res) => {
    let id = req.params.id // id: 2
    console.log(id)
    const productoEliminado = model.eliminarProducto(id)  

    res.status(200).json(
        { 
            ok: true, 
            productoEliminado
        }
    )
}
