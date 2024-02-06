const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    // body element 
    const menuPageBody = document.createElement('div');
    menuPageBody.classList.add('menu-page-body');
    pageContent.appendChild(menuPageBody);

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    menuPageBody.appendChild(heading);

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Pizza1'
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Pizza2'
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Pizza3'
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    menuPageBody.appendChild(heading);
    menuPageBody.appendChild(menuList);
    pageContent.appendChild(menuPageBody);
    content.appendChild(pageContent);



}

export default createMenuPage;