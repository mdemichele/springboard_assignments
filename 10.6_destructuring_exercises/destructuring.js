/* Code To Refactor */
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;

/* Write an ES2015 Version */
let {a, b} = obj.numbers;


/* Code To Refactor */
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

/* Write an ES 2015 Version */
[arr[0], arr[1]] = [arr[1], arr[0]]

/* raceResults() */
/* Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest */
const raceResults = (arr) => {
  let { first, second, third, ...rest } = arr;
  let newObject = {
    first, 
    second,
    third,
    ...rest
  }
  return newObject;
}