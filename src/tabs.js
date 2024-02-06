import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content = document.createElement('div');
    const header = document.querySelector('header');
    
    // creating a home for the buttons
    const buttonsHome = document.createElement('div');
    buttonsHome.classList.add('buttons-home');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('home-button');
    buttonsHome.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('menu-button');
    buttonsHome.appendChild(menuButton);
    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('contact-button');
    buttonsHome.appendChild(contactButton);

    // appending buttonsHome to checkerboard within header
    const checkerboard = document.getElementById('checkerboard');
    checkerboard.appendChild(buttonsHome);
    header.appendChild(checkerboard);

    // adding event listeners to the buttons
    homeButton.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })
    menuButton.addEventListener('click', () => {
        clearContent();
        console.log('menu clicked');
        createMenuPage();
    })
    contactButton.addEventListener('click', () => {
        clearContent();
        console.log('contact clicked');
        createContactPage();
    })

}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;