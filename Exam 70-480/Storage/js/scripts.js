
function loadFromLocaleStorage() {
    
}

function saveToLocaleStorage() {
    
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
removeFromStorage.addEventListener('click', RemoveItemFromStorage);
clearLocaleStorage.addEventListener('click', clearLocaleStorage);
loadFromLocaleStorage.addEventListener('click', loadFromLocaleStorage);

