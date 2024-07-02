const express = require('express');
const conexion = require('./router')
const cors = require('cors');
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use('/',conexion);

const port = 5000;
app.listen(port, () =>{
    console.log(`servidor corriendo en el http://localhost:${port}`);
});
