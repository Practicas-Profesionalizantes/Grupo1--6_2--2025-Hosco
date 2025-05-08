const { sql } = require('./conexion.js')

async function hola(){
    
    result = await sql.query('SELECT precio FROM stockInv WHERE id = 2')
    
    console.log(result[0][0]['precio'])
}

hola()
