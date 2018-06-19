'use strict';

function loadFromLocaleStorage() {

    
}

function saveToLocaleStorage() {
    let key = document.querySelector("input[name= 'Key']");
    let value = document.querySelector("input[name= 'Value']");
    
    let keySavedToStorage = JSON.stringify(key.value);
    let valueSavedToStorage = JSON.stringify(value.value);
    localStorage.setItem(keySavedToStorage, valueSavedToStorage);
    key.value = '';
    value.value = '';
}

function clearLocaleStorage() {
    
}

function RemoveItemFromStorage() {
    
}


var addToStorage = document.getElementById('btnAdd');
var removeFromStorage = document.getElementById('btnRemove');
var clearLocaleStorage = document.getElementById('btnClear');
var loadFromLocaleStorage = document.getElementById('loadFromLocaleStorage');


addToStorage.addEventListener('click', saveToLocaleStorage);
//removeFromStorage.addEventListener('click', RemoveItemFromStorage);
//clearLocaleStorage.addEventListener('click', clearLocaleStorage);
//loadFromLocaleStorage.addEventListener('click', loadFromLocaleStorage);

