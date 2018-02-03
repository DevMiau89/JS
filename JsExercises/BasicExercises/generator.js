/**
 * Created by Jacob on 2018-02-03.
 */
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

var g = myGenerator();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
