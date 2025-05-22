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
    
    sql.query(`INSERT INTO pedidos (idUser, idsPrendas, cantidades, metodoDePago, precioUnitarios, subtotales, total) VALUES (${idUser}, '${productoIds}', '${cantidades}', '${metodoDePago}', '${preciosUnitarios}', '${subTotales}', ${total});`)

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
 * @return Devuelve 1 si se borro la prenda
 */
//Funcion completa.
async function eliminarPrenda(idPrenda){

    console.log('hola')

    let results = await sql.query(`DELETE FROM stockInv WHERE id = ${idPrenda};`)
    const result = results[0]['affectedRows']
    if(result != 0){
        return 1}
    else{
        return 0}

}

/**
 * @param {string} nombre - Nombre del material.,
 * @param {string} descripcion - Descripcion del material.,
 * @param {string} rutaImg - Ruta donde se encuentra la imagen del material.,
 * @param {int} stock - Cant de de stock del material.,
 * @return Devuelve 1 si se registro la materia
 */
async function registrarMaterial(nombre, descripcion, rutaImg, stock){ 

    let results = await sql.query(`INSERT INTO stockMat (nombre, descripcion, rutaImg, stock) VALUES ('${nombre}', '${descripcion}', '${rutaImg}', ${stock});`)
    const result = results[0]['affectedRows']
    if(result != 0){
        return 1}
    else{
        return 0}

        
}

/**
 * @param {int} idPrenda - Id de la prenda a modificar.
 */
function modificarPrenda(idsPrendas) {
    
}

/**
 * @param {string} username - Nombre de usuario de la cuenta del equipo
 * @param {string} password - Nombre de usuario de la cuenta del equipo
 */
async function iniciarSesion(username, password){

    if(username.indexOf(' ') != -1 || password.indexOf(' ') != -1){
        return 0
    }else{
        let result = await sql.query(`SELECT id FROM usuariosInv WHERE usuario = 'user' AND passw = 1234`)
        return "Este usuario existe con este Id: " + result[0][0]['id']
    }

}

module.exports = { crearPedido, eliminarPrenda, registrarMaterial, iniciarSesion }
