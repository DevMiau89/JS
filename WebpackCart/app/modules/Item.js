var itemModule = (function() {
    function Item(...args) {
        this.args = args;
    }

    Item.prototype.setArg = function (arg) {
        this.arg = arg;
    }

    Item.prototype.getArg = function () {
        return this.arg
    }
    
    return {
        Item: Item
    }
})();

module.exports = {
    Item : itemModule.Item
}