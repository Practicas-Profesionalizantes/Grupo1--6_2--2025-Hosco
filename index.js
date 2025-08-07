const { Comentarios, ContenidoComunidad, ListaNegra, Ofertas, Pedidos, RegistroAcciones, Roles, Sanciones, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil } = require('./src/database/relaciones.js')
const sequelize = require('./src/database/config/MySql.js')
const jwt = require('jsonwebtoken')
const express = require('express')
const path = require('path')
const cors = require('cors')
const port = 3000

const app = express()

app.use(cors())
app.use(express.json())

console.clear()

async function initSQLDatabase() {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
}
initSQLDatabase().then(() => {
    console.log('DB conectada y sincronizada')
}).catch((error) => {
    console.error('Error al conectar o sincronizar la base de datos:', error)
})

app.post('/', (req, res) => {

})

app.listen(port, async () => console.log(`Express conectado por: http://localhost:${port}`))
