/**
 * Created by DevMiau on 12-Feb-18.
 */
var memoize = function (fn) {
    var cache = {};
    return function (x) {
        if (x in cache) return cache[x];
        return cache[x] = fn(x);
    };
};

var fibonacci = memoize(function(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
});