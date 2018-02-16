/**
 * Created by DevMiau on 16-Feb-18.
 */
var obj = {num : 2};

var addToThis = function (a) {
    return this.num + a;
};

console.log(addToThis.call(obj, 3));


var obj2 = {num : 2};

var addToThis2 = function (a,b,c) {
    return this.num + a;
};

var arr = [1,2,3];
console.log(addToThis2.call(obj2, arr));

var arr2 = [1,2,3];
var obj3 = {num: 5};

var bound = addToThis2.bind(obj3);
bound(1,2,3);
