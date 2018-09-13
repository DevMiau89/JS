import {Cart} from './modules/Cart.js'
import {Item} from './modules/Item.js'

(function() {

var products = []    
    
var item = new Item(1,'bike', '60', 'red');
var item2 = new Item(2,'bike', '20', 'blue');
var cart = new Cart();

cart.addItem(item);
cart.addItem(item2);
  
console.log(products);
  
})();