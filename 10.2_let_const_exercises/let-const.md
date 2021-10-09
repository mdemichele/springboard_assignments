# Question 1: Refactor an ES5 Global Const into an ES2015 Version of a Global Constant 

ES5 Global Constant :

```
var PI = 3.14;
PI = 42; // stop me from doing this!
```

ES2015 Global Constants 

```
const PI = 3.14 // This can't be reassigned or redeclared
```

# Question 2: What is the difference between var and let?
The main difference between var and let is in the scope for which the variable will be declared. var will declare a variable with function wide scope; whereas, let will create a block-scoped variable. Additionally, var will hoist a variable to the top of the scope, while let only exists after it is declared. Finally, var declared variables can be redeclared and reassigned; whereas let declared variables can be reassigned but not redeclared. 

# Question 3: What is the difference between var and const? 
const is block-scoped and can neither be reassigned or redeclared. var is scoped to the function and can be reassigned and redeclared 

# Question 4: What is the difference between let and const?
The main difference between let and const is that let can be reassigned and const cannot 

# Question 5: What is hoisting?
Hoisting means the Javascript engine moves the variable declaration to the top of the script. In other words, a variable can be used in the program before it is declared if the variable is hoisted.