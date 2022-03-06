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



