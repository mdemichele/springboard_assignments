// HELPER FUNCTION: add list item 
const addListItem = (text) => {
  let list = document.querySelector("#todo-1");
  let newItem = document.createElement("li");
  newItem.innerHTML = "<div>" + text + "</div>" + "<button class='delete-button'>Delete</button>";
  
  // Get correct number of items in list and set as list item id 
  let listLength = JSON.parse(localStorage.getItem("todoList")).length;
  newItem.setAttribute('id', text);
  
  // Add delete item handler
  let button = newItem.querySelector("button");
  button.addEventListener("click", () => {
    // Get text of li element and delete from localStorage
    let text = event.target.previousElementSibling;
    let todoList = JSON.parse(localStorage.getItem("todoList"))
    
    let filteredList = todoList.filter((value, index, arr) => {
      return (value !== text.innerText);
    });
    
    localStorage.setItem("todoList", JSON.stringify(filteredList));
    
    // Delete parent li element from DOM 
    let parent = event.target.parentElement;
    event.target.parentElement.remove();
  });
  
  // Add completed item handler 
  newItem.addEventListener("click", () => {
    if (newItem.className == "completed") {
      newItem.className = "";
    } else {
      newItem.className = "completed";
    }
  });
  
  // Append new li to list 
  list.appendChild(newItem);
}

// 01. On page load handler 
window.addEventListener('load', (event) => {
  // fill page list with items in localStorage 
  if (localStorage.getItem("todoList") !== null) {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
  
    for (let item of todoList) {
      // Append new li element to list with value of input 
      addListItem(item);
    }
    
  } else {
    console.log("page loaded!");
  }

  
  // localStorage.removeItem("todoList");
  
});

// 02. Use handleSubmit function to handle form submissions 
const form = document.querySelector("#form");
form.addEventListener('submit', (event) => {
  // Prevent the page from reloading
  event.preventDefault();
  
  // if text input is empty 
  if (event.target.elements.todo.value == '' || event.target.elements.todo.value == null) {
    console.log("Nothing was inputted!");
    return 0;
  }

  // If nothing in localStorage yet, create todos array and append new li element 
  if (localStorage.getItem("todoList") == null) {
    // Create todos array in localStorage & push newly entered input value 
    let todoList = [];
    todoList.push(event.target.elements.todo.value);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    // Just push newly entered input value into todos array in localStorage 
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push(event.target.elements.todo.value);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
  
  // Append new li element to list with value of input 
  addListItem(event.target.elements.todo.value);
  
  // Clear form text 
  let textInput = document.querySelector("#form-input");
  textInput.value = "";
});

// 03. Delete Items 
const buttons = [];







