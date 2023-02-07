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

        for (let i = 0; i < 6; i++) {
            let div = document.createElement('div');

            let price = document.createElement('p');
            price.appendChild(document.createTextNode('Price: 5$'));
            div.appendChild(price);

            let button = document.createElement('button');
            button.textContent = 'Order 5$';
            div.appendChild(button);

            temp.appendChild(div);
        }
        menuTab.appendChild(temp);
    }
     content.appendChild(menuTab);
}
