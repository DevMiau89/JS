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
    const date = `${today.getFullYear()} 
                  ${leadingZero((today.getMonth()+1))} 
                  ${leadingZero(today.getDate())} 
                  ${leadingZero(today.getHours())} 
                  ${leadingZero(today.getMinutes())}`;
    return date

})();
