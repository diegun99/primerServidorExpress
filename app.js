// modulos de node
const path = require('path');

// modulos instalados
const express = require('express');
const morgan = require('morgan');



// requiriendo rutas
const routes = require('./routes/routes');
const routesApi = require('./routes/routes-api');

const app = express();


//settings
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.set('appName','Mi primer server');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//rutas
app.use(routes);
app.use('/api',routesApi);

//* = todas las rutas o cualquier ruta
app.get('*',(req,res)=>{
    res.send('archivo no encontrado');
});

//static files
app.use(express.static(path.join(__dirname,'public')))// ubicacion del archivo estatico frontend html ,css o lo que sea


//start de server
app.listen(port, ()=>{
    console.log(`example app listening at http //localhost: ${port}`);
    console.log(`nombre de la app : ${app.get('appName')}`);
});