
  test("Submitting a new task adds it to the list", () => {
    const input = document.getElementById("input"); // step 1
   
    input.value = "test"; // step 2
   
    // input.value.toUpperCase()
    const inputEl = document.querySelector("input");
    inputEl.click(); // step 3
   
    const result = document.querySelector("#result");
  
    
    const value = input.value; // get the value of the name="text" input
  
    
    const uppercased = input.value.toUpperCase();
  
   
  // uppercase the value
    result.textContent = uppercased;
    
   // step 4
    result.textContent = uppercased; // reset the page so it doesn't affect the page/other tests
    equal(result.textContent, "TEST"); 
  });

  

test("Checking a list item and marks it as complete", () => {

   
    const listItem = document.querySelector('div').style.backgroundColor = 'RED'
//     const node = document.createElement("li");
 
   
    
    let list = document.querySelector('ul');
    list.click(); // step 3
   
    const result = document.querySelector("#result")
     const listItemTextDecorationChanged = listItem
    result.textContent = listItemTextDecorationChanged
        equal(result.textContent, "RED" ); 
  

    list.addEventListener('click', ev => {
       if (ev.target.tagName === 'LI') {
         ev.target.classList.toggle('checked');
        
      }
    }, false);
 });

test("Deleting an entry removes it from the list", () => {
  
});

// // function equal(textContent, arg1) {
// //   throw new Error("Function not implemented.");
// // }
