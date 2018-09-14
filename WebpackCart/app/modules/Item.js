export var Item = function (...args) {
    this.args = args;
}

Item.prototype.setArg = function (arg) {
    this.arg = arg;
}

Item.prototype.getArg = function () {
    return this.arg
}
