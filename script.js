//Create a new list item when clicking on the "Add" button
function addToList() {
   const input =document.getElementById("input").value;
   const node = document.createElement("li");
   const textnode = document.createTextNode(input);
   if (input === '') {
      alert("You must write something!");
   } else {
   node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
   }
}






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

