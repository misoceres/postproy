const mprograma = require('../models/Programa');

module.exports = {
    borrar: (req,res) =>{
        const body = req.body;
        mprograma.borrar(body.id,(err,results) =>{
            if(err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    modificar: (req,res) =>{
        const body = req.body;
        mprograma.modificar(body,(err,results) =>{
            if(err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    agregar: (req,res) =>{
        const body = req.body;
        console.log(body);
        mprograma.agregar(body,(err,results) =>{
            if(err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    listar: (req,res)=>{
        mprograma.listar((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results,
            })
        })
    },
}