# Quiz – Functions
```javascript
1. What keyword do you use to declare a function?
//function 
2. What’s the difference between a parameter and an argument?
// a paramater is a variable that is defined in the function, an argument is the actual value or data the is returned to the function when it is called.
3. What does `return` do inside a function?
// send a value back to the part of the program where the function was called.
4. What happens if you don’t return anything?
// If you don’t explicitly use a return statement in a function, the function will still execute its code, but it will not send any value back to the caller. 
5. What’s the output of this?
```javascript
function double(x) {
  return x * 2;
}
console.log(double(4));
//Inside the function, the calculation 4 * 2 is performed, which = to 8. This value is then returned to the caller.
```