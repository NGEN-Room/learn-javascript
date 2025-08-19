# Module 4: Numbers & Math

In this module, you'll learn how to perform calculations and use built-in math tools in JavaScript.

## 🌍 What is a Number?

JavaScript numbers can be whole numbers (integers) or decimals (floating point).  
Example: `42`, `3.14`

---

## 💡 What You'll Learn
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`
- How to round numbers
- The `Math` object and its methods: `Math.floor()`, `Math.random()`, `Math.round()`, `Math.max()`

---

## ✍️ Code Examples

```javascript
let price = 9.99;
let quantity = 3;
let total = price * quantity;

console.log(`Total: $${total}`);

let random = Math.floor(Math.random() * 10); // 0–9
console.log("Random number:", random);

// Modulo example
console.log(10 % 3); // 1 (remainder after division)

// Rounding examples
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2));  // 5
console.log(Math.round(4.5)); // 5
```

---

## 🧠 Key Concepts

- `%` gives you the remainder (modulo)
- `Math.random()` gives a random number between 0 and 1
- `Math.floor()` rounds down, `Math.ceil()` rounds up, `Math.round()` does standard rounding

---

## ✅ Checklist

- [ ] I used `+ - * / %` to do math in JavaScript.  
- [ ] I tried rounding numbers with `Math.floor()`, `Math.ceil()`, and `Math.round()`.  
- [ ] I generated a random number.  
- [ ] I used variables to store and calculate a result.  

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Math and Numbers](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)
