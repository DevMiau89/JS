/**
 * Created by DevMiau on 14-Mar-18.
 */
function monthAsString(userM) {
    var months = [ "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                 ];

    for(let i=0; i<months.length;i++){
        if(i === userM - 1){
            document.forms['dateForm']['monthName'].value = months[i];
        }
    }
}