let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // createItem(`<li>${ourField.value}</li>`)
  createItem(ourField.value);
});

function createItem(x) {
  //because the web browser/JS considers every HTML element an object 
  //this keyword will consider the button element as the parent object for executing the function
  //So the button element will be passed to the function  
  let ourHTML = `<li> ${x} <button onclick="deleteItem(this)">Delete</button></li>`;
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  //sets the field value to an empty string
  ourField.value = "";
  //auto selects the input field so that users don't have to click on the input field for searching anything
  ourField.focus();
}

function deleteItem(elementToDelete){
    // elementToDelete - object
    // parentElement - this method selects the immediate parent element
    elementToDelete.parentElement.remove()
}