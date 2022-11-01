const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

//middlewares (el parámetro es un formato de respuesta)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas o endpoints o paths
app.use(require('./routes/index'));
app.use('/estudiantes', require('./routes/personas'));
app.use('/usuarios', require('./routes/usuarios'));

//Inicindo el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});