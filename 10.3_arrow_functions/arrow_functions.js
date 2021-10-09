/* Refactor the following ES5 Map Callback */
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

/* ES2015 Arrow Function */
const double = (arr) => { arr.map(val => val * 2) }

/* Refactor the following function to use arrow functions */
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

/* ES2015 Refactor */
const squareAndFindEvens = (numbers) => {
  let squares = numbers.map(num => num ** 2);
  
  let evens = squares.filter(square => square % 2 === 0);
  
  return evens 
}