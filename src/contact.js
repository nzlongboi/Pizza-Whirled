const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    // body element
    const contactPageBody = document.createElement('div');
    contactPageBody.classList.add('contact-page-body');
    pageContent.appendChild(contactPageBody);


    const heading = document.createElement('h1');
    heading.textContent = 'About us: Pizza Whirled is a pizzeria chain with locations around Knox County. Jolly Fantastic!';
    const locations = document.createElement('p');
    locations.textContent = 'Located throughout Louisville, Muldraugh, Rosewood, West Point, Valley Station, and more!'
    locations.style.fontSize = '20px';
    heading.appendChild(locations);

    //font color white


    contactPageBody.appendChild(heading);
    pageContent.appendChild(contactPageBody);
    content.appendChild(pageContent);


    //append to content 
}

export default createContactPage;