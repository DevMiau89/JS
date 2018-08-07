function getResource(url, callbacks) {
    fetch(url).then(function(res) {
        
        if (callbacks instanceof Array) {
            callbacks.forEach(function (callback) {
                callback(res);
            });
        } else {
            callbacks(res);
        }   
        
    });
}

function callback1(data) { console.log("callback1", data) }
function callback2(data) { console.log("callback2", data) }

getResource("data.json", callback1);
getResource("data.json", [callback1, callback2]);


function sell(item, price) {
    console.log(typeof price);
    if (!isNaN(price)) {
        price = price === 0 ? "Free" : "$" + price.toFixed(2);
        console.log("Selling " + item + " for " + price);
    } else {
        console.log("Please provide a price");
    }
}

sell("New Things", 0.50);
sell("Old Things", 0);
sell("Whatchamacallit");

function max() {
    var max = 0, i, len, arg;
   
    for (i = 0,len = arguments.length; i < len; i++) {
        arg = arguments[i]
        console.log("i: " + i);
        max = arg > max ? (console.log("new max: " + arg), arg) : (max);
    }
    console.log(arg);
    console.log(len);
    console.log(i);
    return max;
}
console.log("max: " + max(1, 3, 5, 6, 8, 5, 3, 5, 7, 8, 9, 9, 5, 4, 5, 6, 5));

var bacon = {
  slices: 0,
  buy: function (quantity, chocolate) {
    if (typeof quantity !== 'number') {  
        if (quantity === 0) { console.log("WAT?"); }
        if (chocolate === true) { console.log("Adding Joy") }
    return;
    }    
    this.slices += quantity;
    console.log(this.slices + " total slices of bacon!"); 
  }
};

bacon.buy(0);
bacon.buy(5);
bacon.buy(10, true);
bacon.buy("", "1");
bacon.buy("!", { toString: function() { return "1" } });


console.log(typeof bacon.slices)

try { sayHello()  } catch (e) { console.log(e.message) }

try { sayGoodbye() } catch (e) { console.log(e.message) }

var sayHello = function () { console.log("Hello") };

function sayGoodbye() { console.log("Goodbye") }

sayHello();

sayGoodbye();

var people = [
    { fname: "John", lname: "Smith", birthday: "1/1/1978" },
    { fname: "Jane", lname: "Smith", birthday: "2/2/1979" },
    { fname: "Jack", lname: "Smith", birthday: "3/3/1981" },
    { fname: "Juli", lname: "Smith", birthday: "4/4/1982" }
];

people.filter(function (person) {
    return new Date(person.birthday).getFullYear() < 1980;
}).map(function (person) {
    return {
        name: person.fname + " " + person.lname,
        age: moment().diff(moment(person.birthday), "years")
    };
});

var element = document.getElementById("greeting");

function text() {
    if (arguments.length == 0) {
        return element.innerText;        
    }else if ( typeof arguments[0] == 'string') {
        return element.innerText = arguments[0];     
    }else if (typeof arguments[0] =='function') {
        return element.innerText = arguments[0](element.innerText);     
    }else {
        throw ('Type of argument is not valid');   
    }
    
}


console.log(text());
console.log(text("Hello"));
console.log(text(function (text) { return text + " World!"; }));

var student = {
  name: "John Smith",
  resume: [],
  study: function (item) {
    console.log("this is " + this);
    console.log(this.name + " is studying " + item);
    function addToResume(item) { (this.resume.push(item)) };
    addToResume.call(this, item);
  }
}, memorize = student.study;

student.study("chemistry");
console.log(student.resume);
var x = memorize.bind(student);
x("history");
console.log(student.resume);

var ul = document.querySelector("ul"), i, li;

for (i = 0; i < 10; i++) {
  (function(){
      var x = i; 
      li = document.createElement("li");
      li.innerHTML = "Link " + i;
      li.addEventListener("click", function () {            
            console.log("You've clicked " + x);
      }, false);
      ul.appendChild(li);
  })();
}

var ul = document.querySelector("ul"), i, li;
for (i = 0; i < 10; i++) {
  li = document.createElement("li");
  li.innerHTML = "Link " + i;
  li.addEventListener("click", clickHandler(i), false);
  ul.appendChild(li);
}

function clickHandler(index) {
    return function () {
        console.log("You've clicked " + index);
    }
}

function sum() {
  var result = 0;
    for (var i = 0; i<arguments.length; i++){
         result += i;    
    }
  arguments.forEach(function (number) {
    result += number;

  return result;
}

function average() {
  return sum.apply(null, arguments) / arguments.length;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(average(10, 9.5, 8, 9.5, 10));

var Bank = (function () {
    function Bank(balance) {
        this.fee = 0.01;
        this.account = { balance: balance };
    }

    Bank.prototype.deposit = function (amount) {
        var amountWithFee, fee = this.fee;
        this.amountWithFee = amount - (amount * fee);
        this.account.balance += this.amountWithFee;
    }

    Bank.prototype.withdrawal = function (amount) {
        this.amountWithFee = amount + (amount * this.fee);
        this.account.balance -= this.amountWithFee;
    }


    return Bank;
})();

var bank = new Bank(1000);
console.log("fee: " + window.fee);
bank.withdrawal(250);
console.log(JSON.stringify(bank));
console.log("amountWithFee: " + window.amountWithFee);
console.log("fee: " + window.fee);
bank.deposit(250);
console.log(JSON.stringify(bank));
console.log("amountWithFee: " + window.amountWithFee);
console.log("fee: " + window.fee);    

function purchase(item, amount) {
    var amount = parseInt(amount, 10);
    console.log("Got " + item + ": $" + amount.toFixed(2));
}

purchase("Eggs", "01");
purchase("Bacon", "08");


function purchase(item, amount) {
  amount = parseFloat(amount);
  if (isNaN(amount)) { throw "Amount is not a number" }
  console.log("Got " + item + ": $" + amount.toFixed(2));
}

try {
  purchase("Eggs", "1.75");
  purchase("Bacon", "priceless");
} catch (e) {
  console.log(e);
}

(function() {
    "use strict";
    var x = 15;
    var person = {
        firstName: "John",
        lastName: "Smith",
        birthday: "12",
        phone: "(555) 123-4567",
        ssn: "123-45-6789",
        address: "123 White Ave.",
        city: "Nashville",
        state: "TN",
        zip: "90210",
 
        toString: function() {
            return this.firstName + " " + this.lastName + ": " + this.phone;
        }
    };
    console.log(person.toString());
    
    console.log(person.toString());
}());

var element = document.getElementById("greeting");

function html(value) {
    if ( value === undefined) {
        console.log(typeof value);
        return element.innerHTML;
    } else if (typeof value === "string") {
         element.innerHTML = value;
    } else if (typeof value === "function") {
        element.innerHTML = value(element.innerHTML);
    }
}

console.log(html());
html('Hello');
console.log(html());
html(function (text) { return text + " World!"; });
console.log(html());
 
var collection = (function() {
    var items = [];
    var add = function(item) { items.push(item); };
    var get = function(index) { return items[index]; };
    var deleteItem = function(index) { items.splice(index, 1); };
    
    return {
        add: add,
        get: get,
        deleteItem: deleteItem,
        items: items
    };
}());

collection.add("bacon");
collection.add("eggs");
collection.add("cheese");
console.log(JSON.stringify(collection.items));
console.log(collection.get(0));
collection.deleteItem(1);
console.log(JSON.stringify(collection.items));


function Cat(name, breed, color) {
    if (!(this instanceof Cat)) {
        return new Cat(name, breed, color);
    }else{
        this.name = name || "Unknown";
        this.breed = breed || "Unknown";
        this.color = color || "Unknown";    
    }

}

var fluffy = new Cat("Fluffy", "", "White"),
    midnight = Cat("Midnight", "", "Black");

console.log(JSON.stringify(fluffy));
console.log(JSON.stringify(midnight));
