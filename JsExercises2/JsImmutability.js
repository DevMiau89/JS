/**
 * Created by DevMiau on 07-Mar-18.
 */
const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
];

let newHeroesArr = heroes.map(h => {
    let newHero = Object.assign({}, h, {name: h.name.toUpperCase()});
    return newHero;
});

let newHeroesArr2 = heroes.map(h => {
    let newHero = Object.assign({}, h);
    newHero.name = h.name.toUpperCase();
    return newHero;
});

function createPerson() {
    var firstName = 'DevMiau';
    var lastName = 'Koci';

    var returnObj = {
        setName: function (name) {
            firstName = name;
        },
        setLastName: function (surname) {
            lastName = surname;
        },
        getName: function () {
            return firstName;
        },
        getLastName: function () {
            return lastName;
        }
    };
    return returnObj;
}

let person = createPerson();
person.setName('kot');
person.setLastName('koci');

person.getName();
person.getLastName();

var i;

for(i=0; i < 10; i++) {
    (function(currentValueOfI) {
        setTimeout(function () {
           console.log(currentValueOfI);
        });
    })(i);
}

