function add_to_cart(pid,pname,pqty,prate){
    let cart=localStorage.getItem("maqstorecart");
    if(cart==null){

    }
    else{
        let products=[];
        let product={productId:pid,productName:pname,productQuantity:pqty,pRate:prate};
        products.push(product);
        localStorage.setItem("maqstorecart",JSON.stringify(products));
    }
}


function getProductCollectionItems(){
    
}