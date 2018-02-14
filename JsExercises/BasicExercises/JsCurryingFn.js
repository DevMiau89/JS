/**
 * Created by DevMiau on 14-Feb-18.
 */
"use strinct";

var add = function (a) {
    return function (b) {
        return a + b;
    }
};

var addToFive = add(5);

var avg = function (...n) {
    let tot = 0;

    for(let i=0; i< n.length;i++){
        tot +=n[i];
    }
    return tot/n.length;
};

var spiceUp = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    }
};

var doAvg = spiceUp(avg, 1,2,3);

console.log(doAvg(2));

var sayWhat = function (a) {
    return function(b){
        return function (c) {
            console.log("saying" + a + " to" + b + " using" + c);
        }
    }
};

sayWhat(' hello')(' Friends')(' javascript');

var sayHi = sayWhat(' hi');
var sayHiToMe = sayHi(' me');
var sayHiToMeUsing = sayHiToMe(' nothing');

console.log(typeof(sayHi));
console.log(typeof(sayHiToMe));
console.log(typeof(sayHiToMeUsing));

