const names = [
    'Victor',
    'David',
    'Pepe',
    'Martin',
    'Pablo',
    'Javi'
];
/*function getName(index) {
    if (!index || !typeof(index) != 'number'){
        return '';
    }
    if (index < 0) {
        index = 0;
    } else if (index > names.length - 1) {
        index = names.length - 1;
    }
    return names[index];
};*/

document.addEventListener("DOMContentLoaded", function load() {
    addNames();
}, false);

const addNames = () => {
    let list = document.getElementById("list");
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        let item = document.createElement("li");
        let text = document.createTextNode(names[i]);
        item.appendChild(text);
        list.appendChild(item);
    }
};