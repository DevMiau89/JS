/**
 * Created by DevMiau on 05-Mar-18.
 */
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

delete student.rollno;
console.log(student.length);
let counter = 0;



console.log(`length of the object is ${counter}`);

function deleteProp(obj, prop) {
    console.log(typeof prop);
    delete obj[prop];
    return obj;
}

console.log(deleteProp(student, 'name'));

function counter(obj){
    let counter = 0;
    for (prop in obj){
        counter++;
    }
    return counter;
}
console.log(counter(student));

function volumeOfCyliner(r,h){
    let cylinder = Math.PI * (Math.pow(r,2)) * h;
    return cylinder.toFixed(4);
}
console.log(volumeOfCyliner(7,4));


function fn(str){
    let output = [];
    for(let i=0; i<str.length;i++){
        output.push(str.slice(0,i+1));
    }
    for(let i=0; i<str.length;i++){
        output.push(str.slice(-i));
    }
    // output.pop();
    return output;
}