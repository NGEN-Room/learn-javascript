# Module 17: Higher-Order Functions

In this module, you'll learn how to use built-in array functions like `.map()`, `.filter()`, and `.reduce()` — powerful tools for transforming data.

---

## 💡 What You'll Learn
- What higher-order functions are
- How to use `.map()`, `.filter()`, and `.reduce()`
- Why these are cleaner alternatives to `for` loops

---

## ✍️ Code Examples

```javascript
let numbers = [1, 2, 3];

let doubled = numbers.map(n => n * 2);     // [2, 4, 6]
let evens = numbers.filter(n => n % 2 === 0); // [2]
let total = numbers.reduce((sum, n) => sum + n, 0); // 6
```

---

## 🔤 Syntax

```javascript
array.map(item => newItem);
array.filter(item => condition);
array.reduce((acc, item) => newAcc, initialValue);
```

---

## 🧠 Key Concepts

- `.map()` transforms every item and returns a new array
- `.filter()` returns only items that match a condition
- `.reduce()` condenses everything into a single value

---

## ✅ Checklist

- [ ] I used `.map()` to change each item in an array
- [ ] I used `.filter()` to remove unwanted items
- [ ] I used `.reduce()` to total or combine values

---

## 📘 FreeCodeCamp Companion

👉 [Functional Programming: Map, Filter, and Reduce](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
