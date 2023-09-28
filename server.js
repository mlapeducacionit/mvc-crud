import express from 'express'
import 'dotenv/config'
import productosRouter from './routers/productos.router.js'

const app = express()
const PORT = process.env.PORT

// ! MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// ! RUTAS
app.use('/api/productos', productosRouter)

app.all('*', (req, res) => {
  const { path, method } = req
  console.log(path, method)
  res.status(404).json(
    {
      ok: false,
      mensaje: `Algo ocurrió al querer acceder a la ruta ${path}`
    }
  )
})

app.listen(PORT, () => {
  console.log(`Arrancó: http://localhost:${PORT}`)
})