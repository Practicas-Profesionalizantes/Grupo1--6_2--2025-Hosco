const mysql = require('mysql2/promise')

const sql = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database: 'hosco',
})

/**
 * @param {int} idUser - Lista que contiene los Ids.
 * @param {list[idsProductos]} productoIds - Lista que contiene los Ids.
 * @param {list[cantidades]} cantidades - Lista que contiene los Ids.
 * @param {string} metodoDePago - Lista que contiene los Ids.
 * @return No devuelve nada.
 */
async function crearPedido(idUser, productoIds, cantidades, metodoDePago){

    let preciosUnitarios = [] 
    let subTotales = []
    let total

    for(let x = 0; x < productoIds.length; x++){
        
        precio = await sql.query(`SELECT precio FROM stockInv WHERE id = ${productoIds[x]}`)
        preciosUnitarios.push(precio[0][0]['precio'])
        subTotales.push((precio[0][0]['precio'] * cantidades[x]))
        total =+ subTotales[x] 

    }

    sql.query(`INSERT INTO pedidos (idUser, idsPrendas, cantidades, metodoDePago, precioUnitarios, subtotales, total) VALUES (${idUser}, "${productoIds}", "${cantidades}", "${metodoDePago}", "${preciosUnitarios}", "${subTotales}", ${total});`)

}


/**
 * @param
 * @return
 */
async function registrarPrenda(){

}

module.exports = {sql, crearPedido}
