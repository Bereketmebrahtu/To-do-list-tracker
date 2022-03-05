// Create a "close" button and append it to each list item

const listContainer = document.createElement('ul'); // grap list container
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');


listContainer.addEventListener('click', function(){
    let textEl = document.createElement('text');
    textEl.classList.add('text-styling');
    textEl.innerText = inputEl.value;
    listContainer.appendChild(textEl);
    inputEl.value = "";
    textEl.addEventListener('click', function(){
        textEl.style.textDecoration = "line-through";
    })
    textEl.addEventListener('dblclick', function(){
        listContainer.removeChild(textEl);
    })
})