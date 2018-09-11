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
         
         result.forEach(el => {tpl += `<li id =${el.id}>`; tpl += el.login; tpl += "</li>";})        
         
         tpl += "</ul>" 

         div.insertAdjacentHTML('afterbegin', tpl);
         
         document.querySelectorAll('li').forEach(el => el.addEventListener('click', (e) =>{this.getDetails(e.target.id)}))
        
    }
    
    getDetails(element) {
        fetch(`https://api.github.com/users/${element}`)
            .then(response => response.json())
            .then(response => {
                let div = document.querySelector('.characters');
                div.innerHTML = "";
                let tpl = `
                    <p>${response.name}</p><p>${response.public_repos}    
                `
                tpl += `</p>`             
                div.insertAdjacentHTML('afterbegin', tpl);
                
                
        })
        .catch(err => console.log(err))
    }
}

module.exports = Characters;