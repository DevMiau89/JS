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
    localStorage.clear();
}

function RemoveItemFromStorage() {
    let key = document.querySelector("input[name= 'Key']");
    localStorage.removeItem(key.value);
    key.value = '';
    value.value = '';
}


var saveButton = document.getElementById('btnAdd');
var removeButton = document.getElementById('btnRemove');
var clearButton = document.getElementById('btnClear');
var loadButton = document.getElementById('btnLoad');


saveButton.addEventListener('click', saveToLocaleStorage);
removeButton.addEventListener('click', RemoveItemFromStorage);
clearButton.addEventListener('click', clearLocaleStorage);
loadFromLocaleStorage.addEventListener('click', loadFromLocaleStorage);

