
// Create a "close" button and append it to each list item

const listContainer = document.querySelector('ul'); // grap list container
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');


listContainer.addEventListener('click', function() {
    let listItems = document.createElement('li');
    listItems.classList.add('text-styling');
    listItems.innerText = inputEl.value;
    listContainer.appendChild(listItems);
    inputEl.value = "";
    listItems.addEventListener('click', function(){
        listItems.style.textDecoration = "line-through";
    })
    listItems.addEventListener('dblclick', function(){
        listContainer.removeChild(listItems);
    })
})

