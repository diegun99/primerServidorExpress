const express = require('express');
const router = express.Router();// enrutador objeto

router.get('/',(req,res)=>{
    res.render('index',{
        title : 'My webStore'
    });
});

router.get('/login',(req,res)=>{
    res.send('ruta login');
});

router.get('/registro',(req,res)=>{
    res.send('ruta registro');
});


module.exports = router;