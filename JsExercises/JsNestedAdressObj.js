/**
 * Created by DevMiau on 01-Mar-18.
 */
let addressObj = {
    'address': {
        'street' : 'Main Street',
        'homeNumber': '2A',
        'postalCode': '64-920',
        'city': 'JS',
        'fn': function () {
            return this.street + ' ' + this.homeNumber + ' ' + this.postalCode;
        },
        'isFromState': function (city) {
            if(city == this.city){
                return true
            }else{
                return false;
            }
        }
    },

    'fnAddress': function () {
        return this.address;
    }

};
console.log(addressObj.address.fn());
console.log(addressObj.address.fn());
console.log(addressObj.address.isFromState('JS'));