// Change the backgroundColor
document.addEventListener("mousemove", (event) => {
  // determine the color
  let red = Math.floor(255 * (event.pageX / window.innerWidth));
  let blue = Math.floor(255 * (event.pageY / window.innerHeight));
  
  // Set body background to color
  let bodyElement = document.querySelector("body");
  bodyElement.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
  
  // Set paragraph code to color 
  let paragraphCode = document.querySelector("#color-code");
  paragraphCode.innerText = `rgb(${red}, 0, ${blue})`;
});

// Save to clipboard when click happens 
document.addEventListener("click", (event) => {
  let red = Math.floor(255 * (event.pageX / window.innerWidth));
  let blue = Math.floor(255 * (event.pageY / window.innerHeight));
  
  // Save to clipboard 
  navigator.clipboard.writeText(`rgb(${red}, 0, ${blue})`);
  
  // Display saved! 
  let paragraph = document.querySelector("#description");
  paragraph.innerText = "Saved to clipboard!";
  let descriptionContainer = document.querySelector("#description-container");
  descriptionContainer.style.backgroundColor = "rgba(255,255,255,0.2)";
  
  // Remove saved! after 2 seconds 
  setTimeout(() => {
    let paragraph = document.querySelector("#description");
    paragraph.innerText = "";
    let descriptionContainer = document.querySelector("#description-container");
    descriptionContainer.style.backgroundColor = "rgba(0,0,0,0)";
  }, 2000);
  
});
