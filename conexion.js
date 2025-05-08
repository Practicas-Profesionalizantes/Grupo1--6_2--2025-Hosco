const mysql = require('mysql2/promise')

const sql = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database: 'hosco',
})

/**
 * Función que crea pedidos.
 * @param {int} idUser - Lista que contiene los Ids.
 * @param {list[idsProductos]} productoIds - Lista que contiene los Ids.
 * @param {list[cantidades]} cantidades - Lista que contiene los Ids.
 * @param {string} metodoDePago - Lista que contiene los Ids.
 * @return No devuelve nada.
 */
async function crearPedido(idUser, productoIds, cantidades, metodoDePago){

    let preciosUnitarios = []
    let subTotales = []

    for(id of productoIds){
        precio = await sql.query('SELECT precio FROM stockInv WHERE id = 2')
        preciosUnitarios.push(precio[0][0]['precio'])
    }

    sql.query(`INSERT INTO pedidos (idUser, idsPrendas, cantidades, metodoDePago, precioUnitario, subtotal, total) VALUES (${idUser}, ${productoIds}, ${cantidades}, ${metodoDePago}, ${preciosUnitarios}, ${subTotales}, ${total}));`)

    

}

module.exports = {sql, crearPedido}
