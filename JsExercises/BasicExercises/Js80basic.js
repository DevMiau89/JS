/**
 * Created by Jacob on 2018-02-02.
 */
//1. Write a JavaScript program to display the current day and time in the following format.

function myFunction(){
    const today = new Date();
    const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    console.log('today is:' + days[today.getDay()]);
    console.log('cuurent time is ' + today.toLocaleTimeString('en-US'));
}

