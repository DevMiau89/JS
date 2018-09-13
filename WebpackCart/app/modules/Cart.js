export var Cart = function() {
}

Cart.prototype.addItem = function (item) {
    products.push(item);
    
}

//Cart.prototype.deleteItem = function (item) {
//   delete this[item.id];
//}