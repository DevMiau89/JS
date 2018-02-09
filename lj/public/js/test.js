const hamburgerElements = ['Pricing', 'Q/A', 'Info', 'Partnership'];

const button = document.querySelector('#myButton');
const container = document.querySelector('.user-list');

function addUsers() {
    hamburgerElements.forEach(function (element, i) {
       const div = document.createElement('div');
       const a = document.createElement('a');
       div.classList.add('user-cnt');
       a.classList.add('link-name');
       a.innerHTML = `${element}`;
       a.href = '#';
       div.appendChild(a);

       const $cnt = $(div).hide();
       container.appendChild(div);
       $cnt.delay(400*i).slideDown();

    });
}

button.addEventListener('click', addUsers);

