const items = [
    {id : 1, name : 'product1'},
    {id : 2, name : 'product2'},
    {id : 3, name : 'product3'},
    {id : 4, name : 'product4'},
];



const index = (req,res)=>{
    res.render('index',{
        title : 'My webStore'
    });
}


const listOfProduct = (req,res,next)=>{
    res.render('products.ejs',{
        title : 'list of products',
        items : items
    });
};

const registerProduct = (req,res,next)=>{
    const { newItem } =  req.body;
    items.push({
        id: items.length+1,
        name : newItem
    });
  
    res.redirect('/products');
  }

module.exports = {
    index,
    listOfProduct,
    registerProduct

}