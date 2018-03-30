/**
 * Created by DevMiau on 06-Mar-18.
 */
/*Complete and debug code that uses built-in Math functions.
o Random; round; abs; floor; ceiling; min/max; pow; sqrt*/
var randomNumberBetween19 = function() {
    return Math.floor((Math.random() * 20) + 1);
};
console.log(randomNumberBetween19());

var randomNumberBetween99 = function() {
    return Math.ceil((Math.random() * 100));
};
console.log(randomNumberBetween99());

let arr = [0,66,2,6,7,88,45,3,15,32];

function min(array){
    return Math.floor(Math.pow(Math.min.apply(null,array),2));
}

function max(array){
    return Math.floor(Math.sqrt(Math.max.apply(null,array)));
}

