/**
 * Created by DevMiau on 29-Mar-18.
 */
var constant = 32;

function celsiusToFarenheit(temperature){
    var farenheitTemp = temperature * 9 / 5 + constant;
    return farenheitTemp;
}

document.write(celsiusToFarenheit(100));