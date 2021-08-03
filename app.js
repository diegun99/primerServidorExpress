const express = require('express');
const app = express();
const morgan = require('morgan');

// requiriendo rutas
const routes = require('./routes/routes');
const routesApi = require('./routes/routes-api');

const port = 3000;

//settings
app.set('appName','Mi primer server');
app.set('views',__dirname +'/views');
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