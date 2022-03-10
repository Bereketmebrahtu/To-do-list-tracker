<<<<<<< HEAD
// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}
=======
const buttonEl = document.querySelector('button');


buttonEl.addEventListener('click', addToList)

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
 
>>>>>>> 7ce008e1f53ad07db093ae93219e7e34e2dfabda

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}
