//function getResource(url, callbacks) {
//    fetch(url).then(function(res) {
//        
//        if (callbacks instanceof Array) {
//            callbacks.forEach(function (callback) {
//                callback(res);
//            });
//        } else {
//            callbacks(res);
//        }   
//        
//    });
//}
//
//function callback1(data) { console.log("callback1", data) }
//function callback2(data) { console.log("callback2", data) }
//
//getResource("data.json", callback1);
//getResource("data.json", [callback1, callback2]);
//
//
//function sell(item, price) {
//    console.log(typeof price);
//    if (!isNaN(price)) {
//        price = price === 0 ? "Free" : "$" + price.toFixed(2);
//        console.log("Selling " + item + " for " + price);
//    } else {
//        console.log("Please provide a price");
//    }
//}
//
//sell("New Things", 0.50);
//sell("Old Things", 0);
//sell("Whatchamacallit");
//
//function max() {
//    var max = 0, i, len, arg;
//   
//    for (i = 0,len = arguments.length; i < len; i++) {
//        arg = arguments[i]
//        console.log("i: " + i);
//        max = arg > max ? (console.log("new max: " + arg), arg) : (max);
//    }
//    console.log(arg);
//    console.log(len);
//    console.log(i);
//    return max;
//}
//console.log("max: " + max(1, 3, 5, 6, 8, 5, 3, 5, 7, 8, 9, 9, 5, 4, 5, 6, 5));
//
//var bacon = {
//  slices: 0,
//  buy: function (quantity, chocolate) {
//    if (typeof quantity !== 'number') {  
//        if (quantity === 0) { console.log("WAT?"); }
//        if (chocolate === true) { console.log("Adding Joy") }
//    return;
//    }    
//    this.slices += quantity;
//    console.log(this.slices + " total slices of bacon!"); 
//  }
//};
//
//bacon.buy(0);
//bacon.buy(5);
//bacon.buy(10, true);
//bacon.buy("", "1");
//bacon.buy("!", { toString: function() { return "1" } });
//
//
//console.log(typeof bacon.slices)

function Cat(name, breed, color) {
    if (!(this instanceof Cat)) {
        return new Cat(name, breed, color);
    }else{
        this.name = name || "Unknown";
        this.breed = breed || "Unknown";
        this.color = color || "Unknown";    
    }

}

var fluffy = new Cat("Fluffy", "", "White"),
    midnight = Cat("Midnight", "", "Black");

console.log(JSON.stringify(fluffy));
console.log(JSON.stringify(midnight));
