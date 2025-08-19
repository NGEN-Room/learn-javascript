# Module 8: Functions

In this module, you'll learn how to create and call functions to organize and reuse code.

---

## 💡 What You'll Learn
- How to define a function using `function` keyword
- How to pass in parameters and return values
- When and why to use functions

---

## ✍️ Code Examples

```javascript
function greet(name) {
  return `Kia ora, ${name}!`;
}

let message = greet("Piha");
console.log(message);  // Kia ora, Piha!
```

---

## 🔤 Syntax

```javascript
function functionName(parameters) {
  // code
  return value;
}

functionName(arguments);
```

---

## 🧠 Key Concepts

- Functions help you reuse logic
- `return` sends a value back to wherever the function was called
- Parameters are like input slots; arguments are the actual values

---

## ✅ Checklist

- [ ] I wrote a function with at least one parameter
- [ ] I returned a value using `return`
- [ ] I called the function with an argument

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Write Reusable Code with Functions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
