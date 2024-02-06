import createRestaurantHomePage from './restaurant';
import createTabs from './tabs';
import navBar from './nav';


function initialLoad() {
    navBar();
    createTabs();
    createRestaurantHomePage();
}

export default initialLoad;