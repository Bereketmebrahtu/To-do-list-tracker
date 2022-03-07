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
 



