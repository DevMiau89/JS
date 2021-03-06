//***************************************
// Shopping Cart functions



var shoppingCart = (function(){
    // Private methods and properties
    var cart  = [{name:'kielbasa', price: 20, count: 3} , {name:"Podgardle", price: 5, count: 1}];
    
    function Item (name, price, count){
        this.name = name;
        this.price = price;
        this.count = count;
    };
    
    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        this.cart = JSON.parse(localStorage.getItem("shoppingCart"));
    }

    loadCart();
    
    // Public methods and properties
    var obj = {};
    
    obj.addItemToCart = function(name, price, count){
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };
    
    obj.setCountforItem = function(name, count) {
         for(var i in cart) {
             if (cart[i].name === name) {
                 cart[i].count = count;
                 break;
             }
         }
         saveCart();
    };
    
    obj.removeItemFromCart = function(name) { // removes one item
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count --;
                if (cart[i].count === 0) {
                    cart.splice( i, 1);
                }
                return;
            }
        }
        saveCart();
    };
    
    obj.removeItemFromCartAll = function(name) {  // removes all item name
        for( var i in cart ) {
            if(cart[i].name === name) {
                cart.splice(i, 1);
                return;
            }
        }
        saveCart();
    };
    
    obj.clearCart = function() {
        cart = [];
        saveCart();
    };
    
    obj.countCart = function() {   //-> return total count
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };
    
    obj.totalCart = function() { //-> return total cost
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };
    
    
    obj.listCart = function(){  //-> array of Items
        var cartCopy = [];
        for (var i in cart) {
            console.log(cart[i]);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                console.log(item[p]);
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    
    return obj;
    
})();













 










