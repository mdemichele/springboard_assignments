# Quick Question 1 
What does the following code return?

`new Set([1,1,2,2,3,4])`

Code returns a set with only one each of the included values: {1,2,3,4}

# Quick Question 2 
What does the following code return?

`[...new Set("referee")].join("") // "ref"`

Code returns "ref"

# Quick Question 3
What does the Map m look like after running the following code?
```
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
```

Returns: 0: {Array(3) => true}
         1: {Array(3) => false}
         
# hasDuplicate 
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate 
```
const hasDuplicate = (arr) => { 
  const set = new Set(arr);
  return set.length == arr.length ? false : true;
}
```

# vowelCount 
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string 

```
const vowelCount = (str) => {
  let vowels = "aeiou";
  let vowelMap = new Map();
  
  for (let char of str) {
    let lowercase = char.toLowerCase();
    
    if (vowels.includes(lowercase)) {
      if (vowelMap.has(lowercase)) {
        vowelMap.set(lowercase, vowelMap.get(lowercase) + 1);
      } else {
        vowelMap.set(lowercase, 1);
      }
    }
  }
  
  return vowelMap;
}
