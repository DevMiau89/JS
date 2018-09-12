(function () {

var Cart = function() {
    var self = {};
    
    return self;
}

var Item = function (name, price, color) { 
    this.name = name;
    this.price = price;
    this.color = color;
}

Item.prototype.setName = function (newName) {
    this.name = newName;
}

Item.prototype.setPrice = function (newPrice) {
    this.price = newPrice;
}

Item.prototype.setColor = function (newColor) {
    this.color = newColor;
}

Item.prototype.getName = function () {
    return this.name
}

Item.prototype.getPrice = function () {
    return this.price
}

Item.prototype.getColor = function () {
    return this.color
}


Cart.prototype.addToCart = function (item) {
    this.self = item;
}

Cart.prototype.deleteFromCart = function (item) {
   
}

var item = new Item('bike', '60', 'red');
var cart = Cart();
  
item.setName('kot');
console.log(item.getColor());
console.log(item);
    
})();