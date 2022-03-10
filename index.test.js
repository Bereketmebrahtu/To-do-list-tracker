
// const form = document.querySelector("#aform");

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const elements = document.querySelector('#aform').elements;
//   console.log(elements)
//   const todoItem = elements['todo-input'].value;

//   const todoList = document.querySelector('#todo-list');
//   if (todoItem) {
//     todoList.innerHTML += '<li>' + todoItem + '</li>';
//   }
// });

// test('should add a todo item to the list', function () {
//   const selector = document.querySelector('#selector');
//   selector.innerHTML = '<form id="aform">';
//   const form = document.querySelector('#aform');
//   form.elements['todo-input'].value = 'task 1';
  
//  equal(selector.innerHTML.toLowerCase().includes('"todo-input"'));
  
//   //cleanup
//   selector.innerHTML = '';
// });



// test("Submitting a new task adds it to the list", () => {

//   //get the input
//   const myInput = document.querySelector("input");
//   // enter test data into inputs
//   myInput.value = "Have some coffee";
//   // submit the form
//   const submitButton = document.querySelector("span");
//   submitButton.click();
//    // verify that the page contains the expected result
//    const result = document.querySelector("li");
//    equal(result.textContent, "Have some coffee");
//    // reset the page so it doesn't affect anything else
//    result.textContent = ""; 


// });

test("Submitting a new task adds it to the list", addToList => {
    const input = document.querySelector("input"); // step 1
    input.value = "test"; // step 2
    const spanEl = document.querySelector("button");
    spanEl.click(); // step 3
    const textnode = document.querySelector("input");
    equal(textnode.textContent, "TEST"); // step 4
    textnode.textContent = ""; // reset the page so it doesn't affect the page/other tests
  });


test("Checking an entry marks it as complete", () => {
  // test goes here
});

test("Deleting an entry removes it from the list", () => {
  // test goes here
});

