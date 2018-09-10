class Characters {
    fetch() {
      fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(response => {
                this.draw(response); 
                    
            })
            .catch(err => console.log(err))
    }
    draw(result) {
         let div = document.querySelector('#container')
         let tpl = "<ul>"
         
         result.forEach(el => {tpl += "<li>"; tpl += el.login; tpl += "</li>";})
         
        
         tpl += "</ul>" 
//         let ul = document.createElement('ul');
//         
//         let li = document.createElement('li');
//         result.forEach(el => { let li = document.createElement('li'); li.innerText = el.login; ul.append(li)})
//         let x = document.createRange().createContextualFragment(tpl); 

         div.insertAdjacentHTML('afterbegin', tpl);
         
         (function x(){
           var idEl = '';
                
             
         })()
         document.querySelectorAll('li').forEach(el => el.addEventListener('click', function () { console.log(el.id) }))
        
    }              
}

module.exports = Characters;