/* Code to refactor */
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}

/* Write an ES2015 Version */
const createInstructor = (firstName, lastName) => {
  let instructor = {
    firstName,
    lastName
  }
  
  return instructor;
}

/* Code to Refactor */
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

/* Write an ES2015 Version */
let favoriteNumber = 42;

let instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorit"
}

/* Code To Refactor */
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

/* Write an ES2015 Version */
let instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  }
  sayBye() {
    return this.firstName + "says bye!";
  }
}

/* Write a function which generates an animal object This function should accept 3 arguments */
const createAnimal = (species, verb, noise) => {
  let animal = {
    species, 
    [verb]() {
      return noise;
    }
  }
  return animal;
}



