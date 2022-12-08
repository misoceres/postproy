const coneccion = require('../database');

module.exports = {
    borrar:(id,callBack) =>{
        coneccion.query(
            'delete from usuario where id=?',
            [id],
            (error,results) =>{
                if (error) callBack (error);
                return callBack(null,results);
            }
        )
    },
    modificar:(datos,callBack)=>{
        coneccion.query(
            'update usuario set usuario=?,contraseña=?,nombre=?,apellido=? where id =?',
            [datos.usuario,datos.contra,datos.nombre,datos.apellido,datos.id],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
    agregar:(datos,callBack)=>{
        coneccion.query(
            'insert into usuario (usuario,contraseña,nombre,apellido) values (?,?,?,?)',
            [datos.usuario,datos.contraseña,datos.nombre,datos.apellido],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    },
    listar:(callBack) =>{
        coneccion.query(
            'SELECT usuario,nombre,apellido FROM usuario',
            (error,results) =>{
                if (error) callBack (error);
                return callBack(null,results);
            }
        )
    },
    verifica:(datos,callBack) => {
        coneccion.query(
            'select * from usuario where usuario = ? and contraseña = ?',
            [datos.usuario,datos.contraseña],
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        )
    }
}