// modulos de node
const path = require('path');

// modulos instalados
const express = require('express');
const morgan = require('morgan');

const app = express();



// requiriendo rutas
const routes = require('./routes/routes');
const routesApi = require('./routes/routes-api');



//settings
app.set('port', process.env.PORT || 3000);
const port = app.get('port');



app.set('appName','Mi primer server');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('combined'));


//rutas
app.use(routes);
app.use('/api',routesApi);

//* = todas las rutas o cualquier ruta
app.get('*',(req,res)=>{
    res.send('archivo no encontrado');
});



app.listen(port, ()=>{
    console.log(`example app listening at http //localhost: ${port}`);
    console.log(`nombre de la app : ${app.get('appName')}`);
});