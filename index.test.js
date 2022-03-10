const form = document.querySelector("#aform");

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const elements = document.querySelector('#aform').elements;
  console.log(elements)
  const todoItem = elements['todo-input'].value;
  

  const todoList = document.querySelector('#todo-list');
  if (todoItem) {
    todoList.innerHTML += '<li>' + todoItem + '</li>';
  }
});

  
test('should add a todo item to the list', function () {
  const selector = document.querySelector('#selector');
  selector.innerHTML = '<form id="aform"><input type="text" name="todo-input"><button>Submit</button></form><ul id="todo-list"></ul>';
  const form = document.querySelector('#aform');
  form.elements['todo-input'].value = 'task 1';
  
 equal(selector.innerHTML.toLowerCase().includes('"todo-input"'));
  
  //cleanup
  selector.innerHTML = '';
});



  
  test("Selecting marks item off the list", function () {

    const selector = document.querySelector('ul');
    
    const inputEl = document.querySelector('input');
    inputEl.value = 'task';
    
    
    const buttonEl = document.getElementById("button");
   
    
    buttonEl.addEventListener('click', (ev) => {
      if (ev.target === 'LI') {
        ev.target.classList.remove('checked');
      

  
    }  
 
  }, false)
  
})

// test("Checking a list item and marks it as complete", () => {

   
//     // const listItem = document.querySelector('ul')
//     const node = document.createElement("li");
//     node.classList = 'checked'
   
    
//     let list = document.querySelector('li');
//     addCheckedSymbol.click(); // step 3
   
//     const result = document.querySelector("#result")
//     const listItemTextDecorationChanged = list
//     result.toggleAttribute = listItemTextDecorationChanged
//         equal(result.textContent, "RED" ); 
  

//     list.addEventListener('click', ev => {
//        if (ev.target.tagName === 'LI') {
//          ev.target.classList.toggle('checked');
        
//       }
//     }, false);
//  });


// function assert(arg0) {
//   throw new Error("Function not implemented.");
// }
// test("Deleting an entry removes it from the list", () => {
  
// });

// // function equal(textContent, arg1) {
// //   throw new Error("Function not implemented.");
// // 
