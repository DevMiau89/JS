/**
 * Created by Jacob on 2017-10-31.
 */
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

