/**
 * Created by DevMiau on 01-Mar-18.
 */
let addressObj = {
    'address': {
        'street': 'Main Street',
        'homeNumber': '2A',
        'postalCode': '64-920',
        'city': 'JS',
        'fn': function () {
            return this.street + ' ' + this.homeNumber + ' ' + this.postalCode;
        },
    },
    'isFromState': function (city) {
        return (city === this.address.city);
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