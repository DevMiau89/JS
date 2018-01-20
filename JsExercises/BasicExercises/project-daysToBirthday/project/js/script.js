/**
 * Created by Jacob on 2018-01-18.
 */
const inputName = document.querySelector('#formName').value;
const inputDate = document.querySelector('#formDate').value;


function leadingZero(i) {
    return (i < 10)? '0'+i : i;
}

(function convertMS(){
    const today = new Date();
    const oneDay = 24*60*60*1000;
    const date = today.getTime();
    return date

})();

(function nextBirthday() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const nextBirhday = Date.parse(inputBirthday[1] + inputBirthday[0]).toString() + (new Date().getFullYear()).toString();
    return inputBirthday

})();
