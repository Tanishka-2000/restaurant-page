export default function createContactPage(content){
    let contact = document.createElement('div');
    contact.classList.add('contact');

    let details = document.createElement('div');
    details.classList.add('details');

    let heading = document.createElement('h1');
    heading.appendChild(document.createTextNode('Wanna book us for reception...'));
    details.appendChild(heading);

    let form = document.createElement('form');
    let type = ['text', 'tel', 'text'];
    let labelContent = ['Name','Contact no.','Occupation'];

    for (let i = 0; i < 3; i++) {

        let div = document.createElement('div');

        let input = document.createElement('input');
        input.setAttribute('type',type[i]);
        input.setAttribute('placeholder',' ');
        div.appendChild(input);

        let label = document.createElement('label');
        label.appendChild(document.createTextNode(labelContent[i]));
        div.appendChild(label);

        form.appendChild(div);
    }
    let sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    form.appendChild(sendBtn);

    details.appendChild(form);

    let para = document.createElement('p');
    para.appendChild(document.createTextNode('Or contact us at '));

    const iconArray = ['ri-facebook-fill','ri-instagram-fill','ri-twitter-fill'];
    for (let i = 0; i < 3; i++) {
        let icon = document.createElement('i');
        icon.classList.add(iconArray[i]);
        para.appendChild(icon);
    }
    details.appendChild(para);

    contact.appendChild(details);
    content.appendChild(contact);

}
