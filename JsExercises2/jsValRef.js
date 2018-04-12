function add(num1, num2){
    return num1 + num2;
}


var name = 'Tom';
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(name));

var tom = {name: 'Tom'};
var total = 0;
function reversePerson(obj) {
    for (let i=0; i < arguments.length;i++){
        total++;
    }
    obj.name = reverseString(obj.name);
    return obj.name;
}

console.log(reversePerson(tom));
console.log(tom);
console.log(total);