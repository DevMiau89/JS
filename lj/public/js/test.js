
console.log('Hello World');
const hamburgerElements = ['Pricing', 'Q/A', 'Info', 'Partnership'];

const button = document.querySelector('button');

button.addEventListener('click', function () {
    hamburgerElements.forEach(function (element) {
        const html = `<div class="user-cnt">
            <span class="user-name">${element}</span>
        </div>`;
         const list = document.querySelector('ul');
         const span = document.createElement('span');
         list.appendChild(span);
        });
 });
