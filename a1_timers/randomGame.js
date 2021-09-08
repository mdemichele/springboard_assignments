/* ASSIGNMENT 1:
/* Instructions: 
/* Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75. */

function randomGame() {
  
  // Declare a counter variable and a random number variable 
  var counter = 0;
  var num = 0; 
  
  // Continue incrementing counter and choosing a new number until >0.75 
  while (num < 0.75) {
    counter++;
    num = setInterval(randomNum, 1000);
  }
  clearInterval(num);
  counter++;
  console.log(counter);

}

function randomNum() {
  var random = Math.random();
  return random;
}