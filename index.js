const { crearPedido, eliminarPrenda, registrarMaterial } =  require('./src/funciones.js')
const express = require('express')
const path = require('path');
const exp = express()   
const port = 3000

console.clear()

exp.use(express.static(path.join(__dirname)));
exp.use(express.urlencoded({ extended: true }))
exp.use(express.json())

exp.post('/eliminar-prenda', async (req, res) => {
    const idPrenda = req.body['idPrenda']
    let result = await eliminarPrenda(idPrenda)
    
    // res -> devuelve a la aplicacion la confirmacion de que sucedio con la accion
})

exp.post('/registrar-materia', async (req, res) => {
    const nombre = req.body['nombrePrenda']
    const descripcion = req.body['descripcion']
    const rutaImg = req.body['rutaImg']
    const stock = req.body['stock']
    let result = await registrarMaterial(nombre, descripcion, rutaImg, stock)

    // res -> devuelve a la aplicacion la confirmacion de que sucedio con la accion
})

exp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
