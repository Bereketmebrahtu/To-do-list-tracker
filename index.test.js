
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