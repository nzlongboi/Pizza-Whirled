


const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    

    // body element
    const homePageBody = document.createElement('div');
    homePageBody.classList.add('home-page-body');
    pageContent.appendChild(homePageBody);
    
    content.appendChild(pageContent);

}

export default createRestaurantHomePage;