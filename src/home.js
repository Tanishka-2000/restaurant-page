export default function createHomePage(content){

let container = document.createElement('div');
container.classList.add('home-container');

let details = document.createElement('div');
details.classList.add('home-details');

let heading = document.createElement('h1');
heading.appendChild(document.createTextNode('"Glorious Food"'));
details.appendChild(heading);

let description = document.createElement('p');
description.appendChild(document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis, recusandae voluptatem in repudiandae. Mollitia deserunt nemo pariatur nisi quos ducimus repudiandae repellat, provident at est eveniet eligendi'));
details.appendChild(description);

container.appendChild(details);
content.appendChild(container);

}
