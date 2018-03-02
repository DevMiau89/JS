/**
 * Created by DevMiau on 01-Mar-18.
 */
let addressObj = {
    'address': {
        'street': 'Main Street',
        'homeNumber': '2A',
        'postalCode': '64-920',
        1: 'JS',
        'fn': function () {
            return this.street + ' ' + this.homeNumber + ' ' + this.postalCode;
        },
    },
    'isFromState': function (city) {
        return (city === this.address[1]);
    },
    'fnAddress': function () {
        return this.address;
    }

};
console.log(addressObj.address.fn());
console.log(addressObj.address.fn());
console.log(addressObj.isFromState('JS'));




function zeroAdd(d){
    if( d < 10){
        return '0' + d;
    }
}
console.log(zeroAdd(5));

/*Date in dd/mm/yyyy format */
const formattedDate = function () {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${zeroAdd(day)}\\${zeroAdd(month)}\\${year}`;
};

console.log(formattedDate());
/*Dynamic prototype pattern */
function DynamicProtoPattern(name, age, city) {
    this.age = age;
    this.name = name;
    this.city = city;

    if(typeof this.printPerson !== 'function'){
        DynamicProtoPattern.prototype.printPerson = function () {
            console.log(this.city + " " + this.name + " " + this.age);
        }
    }
}

const obj = new DynamicProtoPattern('kot', 22, 'kotowo');
console.log(obj);

function factorial(n) {
    if(n === 0){
        return 1;
    }else{
        return n * arguments.callee(n - 1);
    }
}

console.log(factorial(4));

function Computer(name, ramMemory, processor){
    this.name = name;
    this.ramMemory = ramMemory;
    this.processor = processor
}

var computerObj = new Computer('Samsung', '16GB', "Celeron");

console.log(computerObj);

function ObjPattern(name, surname, age, city){
    var ob = {};
    ob.name = name;
    ob.surname = surname;
    ob.age = age;
    ob.city = city;
    return ob;
}

var pattern = ObjPattern("DevMiau", "Koci", 23, "Kotowo");
console.log(pattern);

const MyObj = function () {
    this.data = null;
};

MyObj.prototype.name = "Marcin";
MyObj.prototype.print = function () {
    console.log(this.name);
};

const ob = new MyObj();
ob.data = {
     "2015-10-10" : { name: "City Tour", where: "Barcelona"},
    "2015-11-10" : { name: "Mall shopping", where: "Mall"},
    "2015-12-09" : { name: "Things at school", where: "School"}
};

for(var i in ob){
    console.log(i);
}

for(var i in ob){
    if(ob.hasOwnProperty(i)){
        console.log(ob[i]);
    }
}
