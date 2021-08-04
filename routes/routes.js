const express = require('express');
const router = express.Router();// enrutador objeto

const IndexControler =  require('../controllers/index');



router.get('/',IndexControler.index);

router.get('/products',IndexControler.listOfProduct);

router.get('/registro',(req,res)=>{
    res.send('ruta registro');
});

router.post('/new-product',IndexControler.registerProduct,);


module.exports = router;