export var Cart = function() {

}

export var products = []    

Cart.prototype.addItem = function (item) {
    products.push(item);
    
}

Cart.prototype.deleteItem = function (item) {
   var index = products.indexOf(item);
   products.splice(index, 1)    
}

Cart.prototype.isInCart = function(item) {
   
   return products.indexOf(item) !== -1;  
}