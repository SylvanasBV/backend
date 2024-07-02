const conexion =require('../database/bd');
exports.save = (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const ciudad = req.body.ciudad;
    //console.log(nombre+"-"+ciudad);
    conexion.query('INSERT INTO usuario SET ? ; INSERT INTO nota SET ?',[{id:id, nombre: nombre, edad: edad, ciudad: ciudad },{id_estudiante:id,nota1:0,nota2:0,nota3:0,nota4:0}], (error, results) => {

        if (error) {
            console.log(error);
        } else {

            res.redirect('/');
        }
    });
}


exports.update=(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const ciudad = req.body.ciudad;

    /*conexion.query('UPDATE estudiante SET ? WHERE id=?',[{ nombre: nombre, edad: edad, ciudad: ciudad },id], (error, results) => {
        if(error){
            console.log(error);
        } else {
            res.redirect('/');
        }
    });*/

}

exports.nota=(req,res)=>{
    const id = req.body.id;
    const nota1 = req.body.nota1;
    const nota2 = req.body.nota2;
    const nota3 = req.body.nota3;
    const nota4 = req.body.nota4;

    /*conexion.query('UPDATE nota SET ? WHERE id_estudiante=?',[{nota1: nota1, nota2: nota2, nota3: nota3, nota4: nota4},id], (error,results) =>{
        if(error){
            throw error;
        } else {
            res.redirect('/');
        }
    });*/
}