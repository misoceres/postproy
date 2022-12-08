const coneccion = require('../database');

module.exports = {
    borrar:(id,callBack) =>{
        coneccion.query(
            'delete from programa where idprog=?',
            [id],
            (error,results) =>{
                if (error) callBack (error);
                return callBack(null,results);
            }
        )
    },
    modificar:(datos,callBack)=>{
        coneccion.query(
            'update programa set nombre=?,duracion=?,tipo=?,precio=? where idprog =?',
            [datos.nombre,datos.duracion,datos.tipo,datos.precio,datos.idprog],
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
            'insert into programa (nombre,duracion,tipo,precio) values (?,?,?,?)',
            [datos.nombre,datos.duracion,datos.tipo,datos.precio],
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
            'select * from programa',
            (error,results) =>{
                if (error) callBack (error);
                return callBack(null,results);
            }
        )
    },

}