// ! DB
const productos = []
let idProducto = 0

const leerProductos = () => {
    return productos
}

const leerProducto = (id) => {
    let producto = productos.find(producto => producto.id == id) || {}
    return producto
}

const crearProducto = producto => {
    producto.id = ++idProducto // {...producto, id: 1}
    productos.push(producto)
    return producto
}

const actualizarProducto = (id, producto) => {
    let index = productos.findIndex(producto => producto.id == id)
    productos.splice(index, 1, producto)
    return producto
}

const eliminarProducto = (id) => {
    let index = productos.findIndex(producto => producto.id == id) // [{id: 1}, {id: 2}, {id: 3}]
    let producto = productos.splice(index, 1)[0]
    return producto
}


export default {
    leerProductos,
    leerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}