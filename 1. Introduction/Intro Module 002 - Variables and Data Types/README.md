# Module 2: Variables & Data Types

In this module, you’ll learn how to declare variables in JavaScript and understand the different data types used in coding.

## 🌍 What is a Variable?

Think of a variable like a labelled box. You can put something in the box (a value), check what’s inside, or replace it later.

---

## 💡 What You'll Learn
- How to use `let`, `const`, and (avoid) `var`
- Primitive data types: `string`, `number`, `boolean`, `null`, `undefined`
- Type checking with `typeof`
- When to use `const` vs `let`

---

## ✍️ Code Examples

```javascript
var oldWay = "We don’t really use this anymore"; // avoid using var
```

```javascript
const name = "Aroha";
let age = 16;
let isStudent = true;

console.log(typeof name);  // string
console.log(typeof age);   // number
console.log(typeof isStudent); // boolean
```

```javascript
let score = 10;     // number
score = "ten";      // now it's a string!
console.log(typeof score); // string
```

---

## 🧠 Key Concepts

- Use `let` when a variable’s value might change
- Use `const` for values that should not change
- `typeof` returns the data type of a variable
- JavaScript is **loosely typed** – a variable’s type can change

---

## ✅ Checklist

- [ ] I created a variable with `let`.  
- [ ] I created a variable with `const`.  
- [ ] I used `typeof` to check what kind of value I stored.  
- [ ] I know that variables are like boxes that can hold different things.  

---


## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Declare JavaScript Variables](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)
