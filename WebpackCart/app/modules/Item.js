export var Item = function (id, name, price, color) {
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