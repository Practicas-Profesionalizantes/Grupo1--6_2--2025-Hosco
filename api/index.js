const {Comentarios, ContenidoComunidad, ListaNegra, Ofertas, Pedidos, RegistroAcciones, Roles, Sanciones, StockInv, Usuarios, UsuariosInv, StockMat, UserPerfil} = require('../database/Relaciones.js')
const sequelize = require('../database/config/mySql.js')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const port = process.env.port || 3000

app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.listen(port, () => console.log(`Servicio Express en el puerto ${port}`))
