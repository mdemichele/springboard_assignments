/* Refactor This Function */
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

/* ES2015 */
function filterOutOdds(...nums) {
  return nums.filter(nums => num % 2 === 0);
}

/* Write a function called findMin that accepts a variable number of arguments and returns the smallest argument */
const findMin = (...nums) => { Math.min(...nums) }

/* Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object */
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

/* Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. */
/* The function should return a new array with the original array values and all of the additional arguments doubled */
const doubleAndReturnArgs = (arr, ...args) => { return [...arr, ...args.map(value => value * 2)] }

/* Write the following functions using rest, spread, and refactor these functions to be arrow functions */
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}

/* ES2015 Refactors */
const removeRandom = (items) => {
  const random = Math.floor(Math.random() * items.length);
  return [...items.slice(0, random), ...items.slice(random + 1)];
}

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => ({ ...obj, key: val })

const removeKey = (obj, key) => {
  const copyObj = { ...obj };
  delete copyObj[key];
  return copyObj;
}

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
  const newObj = {...obj};
  newObj[key] = val;
  return newObj;
}