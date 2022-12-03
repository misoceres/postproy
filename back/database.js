const mysql = require('mysql');
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 10,
});

pool.getConnection((err,connection)=>{
    if (err) {if (err.code === 'PROTOCOL_CONNECTION_LOST'){
                    console.error('La coneccion con la Base de Datos fue Perdida');}
        if (err.code === 'ER_CON_COUNT_ERROR'){
                console.error('La Base de Datos tiene demasiadas conecciones');}
        if (err.code === 'ECONNREFUSED'){
                console.error('La coneccion con la Base de Datos fue rechazada');} }
    if(connection) connection.realise();
    console.log('Coneccion a la Base de Datos exitosa!!!');
    return;
});

module.exports = pool;