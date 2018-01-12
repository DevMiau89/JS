/* Add element to the list */
document.addEventListener('DOMContentLoaded', function() {
    const toDoForm = document.querySelector('.todo-form');
    let toDoList = document.querySelector('.todo-list');
    const toDOSearch = document.querySelector('.todo-list-search-form');
    let liArray = JSON.parse(localStorage.getItem('toDoList')) || [];


    populateList();
    function validateForm(e) {
        e.preventDefault();
        // loadToDoList();
        const formValue = toDoForm["todoMessage"].value;
        //Validations
        const form = toDoForm["todoMessage"];
        if(formValue == '') {
            message = toDoForm.children[1].children[0];
            message.innerText = 'Please fill in the blank';
            message.style.setProperty('color', 'red');
            form.style.setProperty('border-color', 'red');
            return false;
        }else{
            addElement();
            toDoForm.submit();

        }
    }

    function addElement() {
        const formValue = toDoForm["todoMessage"].value;

        const currentdate = new Date();
        const today = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-"
                + currentdate.getFullYear() + " "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes();

        const obj = {
            date : `${today}`,
            text : `${formValue}`
        };
        liArray.push(obj);
        localStorage.setItem('toDoList', JSON.stringify(liArray));

    }

    function populateList() {
        liArray.forEach(element => {
            // let li = document.createElement('li');
            // li.innerText = element;
            let elem = document.createElement('div');
            let bar = document.createElement('div');
            let text = document.createElement('div');
            let h3 = document.createElement('H3');
            let button = document.createElement('BUTTON');
            let x = document.createElement('I');

            elem.classList.add("todo-element");
            bar.classList.add("todo-element-bar");
            h3.classList.add("todo-element-date");
            button.classList.add("todo-element-delete");
            text.classList.add("todo-element-text");
            x.classList.add("fa");
            x.classList.add("fa-times-circle");


            h3.innerHTML = element.date;
            button.setAttribute('title', 'Usuń task');
            text.innerText = element.text;


            bar.appendChild(h3);
            bar.appendChild(button);
            button.appendChild(x);
            elem.appendChild(bar);
            elem.appendChild(text);

            toDoList.appendChild(elem);}
    )};


    toDoForm.addEventListener('submit', validateForm);
});

