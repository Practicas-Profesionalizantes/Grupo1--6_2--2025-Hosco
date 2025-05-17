const { sql } = require('./conexion.js')

/**
 * @param {int} idUser - Lista que contiene los Ids.
 * @param {list[idsProductos]} productoIds - Lista que contiene los Ids.
 * @param {list[cantidades]} cantidades - Lista que contiene los Ids.
 * @param {string} metodoDePago - Lista que contiene los Ids.
 * @return No devuelve nada.
 */
//Funcion lista.
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
 * @param {string} nombre - Nombre de la prenda/producto.
 * @param {string} descripcion - Descripcion de la prenda/producto.
 * @param {string} rutaImg - Ruta donde se encuentra la imagen.
 * @param {string} talle - Talle de la prenda/producto.
 * @param {float} precio - Precio unitario de la prenda/producto.
 * @return
 */
//Funcion incompleta hasta tener una manera de subir imagenes en uan interfaz visual.
async function registrarPrenda(nombre, descripcion, rutaImg, talle, precio){

}

/**
 * @param {int} idPrenda - Id de la prenda a eliminar.
 * @return No devuelve nada.
 */
//Funcion completa.
async function eliminarPrenda(idPrenda){

    const results = await sql.query(`DELETE FROM stockInv WHERE id = ${idPrenda};`)
    console.log(results[0])
    //const result = results[0]

}


/**
 * @param {int} idPrenda - Id de la prenda a modificar.
 */
function modificarPrenda(idsPrendas) {
    
}

module.exports = { crearPedido, eliminarPrenda }
