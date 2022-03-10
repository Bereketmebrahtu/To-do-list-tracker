
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
 
 // Add a "checked" symbol when clicking on a list item
 function addCheckedSymbol() {
   let list = document.querySelector('ul');
   const listItem = document.querySelector('li')
   console.log(listItem)
   const node = document.createElement("li");
   console.log(node)
   node.className = 'checked'
   list.addEventListener('submit', ev => {
     if (ev.target. === 'LI') {
       ev.target.classList.toggle('checked');
       
     }
   }, false);
   

 }

// Create a new list item when clicking on the "Add" button
const spanEl = document.querySelector('span')

spanEl.addEventListener('click', newElement)
function newElement()
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let buttonEl = document.createElement("button");
  let txt = document.createTextNode("text");
  buttonEl.className = "close";
  buttonEl.appendChild(txt);
  li.appendChild(buttonEl);

   {
    
  }


