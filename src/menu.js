export default function createMenuPage(content){
    const menuArray = ['Drinks','Breakfast','Lunch','Dinner','Dessert'];

    let menuTab = document.createElement('div');
    menuTab.classList.add('menu-tab');

    for (let i = 0; i < 5; i++) {
        let heading = document.createElement('h1');
        heading.appendChild(document.createTextNode(menuArray[i]));
        menuTab.appendChild(heading);

        let temp = document.createElement('div');
        temp.classList.add(menuArray[i].toLowerCase());

        for (let j = 0; j < 6; j++) {
            let div = document.createElement('div');

            let image = document.createElement('img');
            image.setAttribute('src', `./images/${menuArray[i].toLowerCase()}/image${j+1}.jpg`);
            div.appendChild(image);

            let btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');

            let price = document.createElement('p');
            price.appendChild(document.createTextNode('Price: 5$'));
            btnGroup.appendChild(price);

            let button = document.createElement('button');
            button.textContent = 'Order 5$';
            btnGroup.appendChild(button);

            div.appendChild(btnGroup);
            temp.appendChild(div);
        }
        menuTab.appendChild(temp);
    }
     content.appendChild(menuTab);
}
