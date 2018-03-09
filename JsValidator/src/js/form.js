/**
 * Created by Jacob on 2017-10-31.
 */

document.addEventListener('DOMContentLoaded', function () {
    function validate() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        if (name == '' || email == '' || subject == '' || message == '') {
            alert('Please fill in the form');
        }
        else {
            document.getElementById('feedback').innerHTML = 'Thank you for filling in the form';
        }
    }

    (function prePopulate(){
        const formInputs = document.querySelectorAll('#myForm input');
        formInputs.forEach(function (input) {
          if(input.id === 'name'){
              input.setAttribute('placeholder','DevMiau');
          }
          else if(input.id === 'email'){
              console.log(input.email);
              input.setAttribute('placeholder','koci@koci.com');
          }else{
              input.setAttribute('placeholder','Please Enter the subject');
          }
        })
    })();
});


