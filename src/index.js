import createHomePage from './home.js';
import createMenuPage from './menu.js'
import createContactPage from './contact.js';

const content = document.querySelector('.content');
// createHomePage(content);
//createMenuPage(content);
//

// functon to render Page
function respondToClick(e){
    if(e.target.textContent === 'home'){
        content.innerHTML = '';
        createHomePage(content);
    }else if(e.target.textContent === 'menu'){
        content.innerHTML = '';
        createMenuPage(content);
    }else if(e.target.textContent === 'contact'){
        content.innerHTML = '';
        createContactPage(content);
    }
}

// adding event listeners to links
const nav = document.querySelector('nav');
nav.addEventListener('click', respondToClick);

createHomePage(content);
