// 01. Select the section with an id of container without using querySelector.
let container = document.getElementById("container");
container.className = "blue";

// 02. Select the section with an id of container using querySelector.
container = document.querySelector("#container");
container.className = "red";

// 03. Select all of the list items with a class of “second”.
let secondItems = document.getElementsByClassName("second");

// 04. Select a list item with a class of third, but only the list item inside of the ol tag.
let thirdItems = document.querySelector("ol .third");

// 05. Give the section with an id of container the text “Hello!”.
// container.innerText = "Hello!";

// 06. Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer");
footer.classList.add("main");

// 07. Remove the class main on the div with a class of footer.
footer.classList.remove("main");

// 08. Create a new li element.
let newListItem = document.createElement("li");

// 09. Give the li the text “four”.
newListItem.innerText = "four";

// 10. Append the li to the ul element.
let unordered = document.querySelector("ul");
unordered.append(newListItem);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”
let orderedItems = document.querySelector("ol");
for (let i = 0; i < orderedItems.children.length; i++) {

  orderedItems.children[i].style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
footer.remove();



