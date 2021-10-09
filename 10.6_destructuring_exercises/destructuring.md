# Object Destructuring 1
What does the following code return/print?

```
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // prints 8
console.log(yearNeptuneDiscovered); // prints 1846
```

# Object Destructuring 2
What does the following code return/print 

```
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1569}
```

# Object Destructuring 3
What does the following return/print 

```
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // returns Your name is Alejandro and you like purple
getUserData({firstName: "Melissa"}) // returns Your name is Melissa and you like green
getUserData({}) // returns Your name is undefined and you like green 
```

