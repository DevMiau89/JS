/**
 * Created by Jacob on 2018-02-03.
 */

// import console from 'console'

// const console = require('console').default;

function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

var g = myGenerator();

console.log(g.next());
g.next();
g.next();
