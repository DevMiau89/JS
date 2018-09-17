 const cartModule = (function() {    
    function Cart() {
    }
     
    var products = [];  
     
    Cart.prototype.addItem = function (item) {
        products.push(item);

    }

    Cart.prototype.deleteItem = function (item) {
        var index = products.indexOf(item);
        products.splice(index, 1)    
    }

    Cart.prototype.isInCart = function(item) {
        return products.includes(item);  
    }
    
    const initCart =  function initCart() {
        var cart = new Cart();
        return cart;
    }
    return {
        initCart: initCart,
        products: products
    }
     
})();


module.exports = {
    Cart: cartModule.initCart(),
    products: cartModule.products
}