const mysql = require('mysql2/promise')

const sql = mysql.createPool({
    host:'localhost',
    user:'root',
    password: '',
    database: 'hosco',
})

module.exports = { sql }
 