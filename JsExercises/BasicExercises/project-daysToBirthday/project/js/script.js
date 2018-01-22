/**
 * Created by Jacob on 2018-01-18.
 */
const form = document.querySelector('#Form');
const result = document.querySelector('#result');

function nextBirthday(e) {
    e.preventDefault();
        const inputName = document.querySelector('#formName').value;
        const inputDate = document.querySelector('#formDate').value;

        const inputBirthday = inputDate.split('.');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = months[(inputBirthday[1][1]) - 1];
        const nextBirthdayMS = Date.parse(month + " " + (inputBirthday[0]).toString() + ", " + (new Date().getFullYear()).toString());
        const todayMS = (new Date()).getTime();
        const oneDay = 24 * 60 * 60 * 1000;

        const daysToBirthday = (Math.floor((nextBirthdayMS - todayMS) / oneDay)) + 1;
        result.innerText = `${inputName} there are only ${daysToBirthday} until your Birthday!`;
}

form.addEventListener('submit', nextBirthday);
