(function() {
    
var Cart = function() {

}

var Item = function (id, name, price, color) {
    this.id = id;
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


Cart.prototype.addItem = function (item) {
    this[item.id] = item;
    
}

Cart.prototype.deleteItem = function (item) {
   delete this[item.id];
}

var item = new Item(1,'bike', '60', 'red');
var item2 = new Item(2,'bike', '20', 'blue');
var cart = new Cart();

cart.addItem(item);
cart.addItem(item2);
cart.deleteItem(item2);    
console.log(cart);
  
})();