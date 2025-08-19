# Module 10: Destructuring & Spread

In this module, you'll learn how to pull values from objects and arrays using destructuring, and how to copy or merge with the spread operator.

---

## 💡 What You'll Learn
- Destructuring from arrays and objects
- Using the spread operator `...`
- Copying and merging objects/arrays

---

## ✍️ Code Examples

```javascript
let player = { name: "Aroha", level: 5 };
let { name, level } = player;

console.log(name); // Aroha

let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor); // red

let extendedColors = [...colors, "yellow"];
```

---

## 🔤 Syntax

```javascript
// Object destructuring
const { prop1, prop2 } = obj;

// Array destructuring
const [item1, item2] = arr;

// Spread operator
const copy = [...arr];             // clone array
const merged = [...arr1, ...arr2]; // merge arrays

const newObj = { ...oldObj, key: "value" }; // clone and modify object
```

---

## 🧠 Key Concepts

- Destructuring helps extract values easily
- The spread operator `...` lets you clone or combine arrays/objects
- These are commonly used in React and modern JS development

---

## ✅ Checklist

- [ ] I destructured values from an array and object
- [ ] I used `...` to copy or merge data
- [ ] I used destructured values in `console.log()` or logic

---

## 📘 FreeCodeCamp Companion

👉 [ES6: Destructure and Spread](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)
