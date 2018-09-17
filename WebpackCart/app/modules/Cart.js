 const cartModule = (function() {
    var Cart = function() {
        this.products = [];    
    }
       
    Cart.prototype.addItem = function (item) {
        this.products.push(item);

    }

    Cart.prototype.deleteItem = function (item) {
        var index = this.products.indexOf(item);
        this.products.splice(index, 1)    
    }

    Cart.prototype.isInCart = function(item) {
        return this.products.includes(item);  
    }
    
    return {
        Cart: Cart    
    }
})();


module.exports = {
    Cart: cartModule.Cart
}