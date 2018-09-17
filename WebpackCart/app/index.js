import {Cart, products} from './modules/Cart.js'
import {Item} from './modules/Item.js'


var item = new Item(1,'bike', '60', 'red');
var item2 = new Item(2,'bike', '20', 'blue');


Cart.addItem(item);
Cart.addItem(item2);

Cart.deleteItem(item2);
console.log(Cart.isInCart(item));
console.log(Cart.isInCart(item2));    
console.log(Cart);

