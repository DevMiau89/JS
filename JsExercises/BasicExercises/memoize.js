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

var maxSequence = function(array){
  // ...
  let max_so_far = 0;
  let max_ending = 0;

  for(let i=0; i < array.length; i++) {
     max_ending = max_ending + array[i];
     if(max_ending < 0) {
       max_ending = 0;
     }
     else if(max_so_far < max_ending){
       max_so_far = max_ending;
     }
     console.log(max_so_far);
     console.log(max_ending);
  }

  return max_so_far;
};