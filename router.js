const express= require('express');
const router= express.Router();

const conexion = require("./database/bd");
router.get('/usuario', (req,res)=>{
    conexion.query('SELECT id_usuario,nombre,fecha_nacimiento,correo,telefono FROM usuario',(error,results)=>{
        if(error){
            return res.json(error);
        } else {
            return res.json(usuario=results);
        }
    })
})
router.get('/Calificaciones', (req,res)=>{
    conexion.query('SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM usuario,nota WHERE usuario.id_usuario = nota.id_usuario AND usuario.rol = "Estudiante"',(error,results)=>{
        if(error){
            return res.json(error);
        } else {
            return res.json(usuario=results);
        }
    })
})
router.get('/Actividades', (req,res)=>{
    conexion.query('SELECT * FROM actividad, bootcamp WHERE actividad.id_bootcamp = bootcamp.id_bootcamp',(error,results)=>{
        if(error){
            return res.json(error);
        } else {
            return res.json(usuario=results);
        }
    })
})
router.get('/Sesion', (req,res)=>{
    conexion.query('SELECT * FROM sesion',(error,results)=>{
        if(error){
            return res.json(error);
        } else {
            return res.json(usuario=results);
        }
    })
})


/*router.get('/', (req,res)=>{
    //res.send('VISTA DE LA PAGINA CONTACTO');
    //se usa solamente para ver si genera consultas en el programa
   //conexion.query('SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM estudiante,nota WHERE estudiante.id = nota.id_nota ; SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM estudiante,nota WHERE estudiante.id = nota.id_nota AND ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) >= 3.0',[1,2],(error, results)=>{
   conexion.query('SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM estudiante,nota WHERE estudiante.id = nota.id_estudiante ; SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM estudiante,nota WHERE estudiante.id = nota.id_estudiante AND ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) >= 3.0 ; SELECT *,ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) as promedio FROM estudiante,nota WHERE estudiante.id = nota.id_estudiante AND ROUND((nota.nota1+nota.nota2+nota.nota3)/3,1) <= 3.0 ',[1,2,3],(error, results)=>{
        if(error){
            throw error;
        }else {
            res.render('index',{result:results[0],data:results[1],datan:results[2]});
        }
    });
    
    router.get('/create', (req,res)=>{{
        res.render('create');
    }});
    router.get('/edit/:id',(req,res)=>{
        const id = req.params.id;
        conexion.query ('SELECT * FROM estudiante WHERE id=?',[id],(error,results)=>{
            if(error){
                throw error;
            }else {
                res.render('edit',{user:results[0]});
            }
        })
    });

    router.get('/editnota/:id',(req,res)=>{
        const id = req.params.id;
        conexion.query ('SELECT * FROM estudiante,nota WHERE estudiante.id=? AND estudiante.id=nota.id_estudiante',[id],(error,results)=>{
            if(error){
                throw error;
            }else {
                res.render('editnota',{user:results[0]});
            }
        })
    });

    router.get('/delete/:id',(req,res)=>{
        const id = req.params.id;
        conexion.query ('DELETE FROM estudiante WHERE id=? ',[id],(error,results)=>{
            if(error){
                throw error;
            } else {
                res.redirect('/');
            }
        })
    });

    const crud = require("./controllers/crud");
    router.post('/save', crud.save);
    router.post('/update', crud.update);
    router.post('/nota',crud.nota);

})*/
/*Exporta es el contenido que hay en contacto*/
module.exports=router;