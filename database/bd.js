const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mintic',
    multipleStatements: true

});
conexion.connect((error)=>{
    if(error){
        console.error('error de conexion es :' + error);
        return
    }

    else{
        console.log('conectado con la DB MySql!')
    }
})

module.exports = conexion;