# Module 20: ES6+ Syntax Overview

In this final module, you'll get a tour of modern JavaScript features that you'll use constantly in frameworks like React.

---

## 💡 What You'll Learn
- Arrow functions
- Template literals
- Default parameters
- Optional chaining
- Ternary expressions

---

## ✍️ Code Examples

```javascript
// Arrow functions
const greet = name => `Hi, ${name}!`;

// Template literals
let age = 25;
console.log(`You are ${age} years old.`);

// Default parameters
function greet(name = "friend") {
  console.log(`Hello, ${name}`);
}

// Optional chaining
let user = { profile: { name: "Piha" } };
console.log(user?.profile?.name);

// Ternary operator
let isDark = true;
let theme = isDark ? "Dark Mode" : "Light Mode";
```

---

## 🔤 Syntax

```javascript
const func = (arg) => { ... }
`${variable} in a string`
function greet(name = "Guest") { ... }
object?.property
condition ? valueIfTrue : valueIfFalse
```

---

## 🧠 Key Concepts

- Arrow functions make functions shorter and more readable
- Template literals make string building easier
- Optional chaining avoids errors from undefined
- Ternaries are shorthand `if/else`

---

## ✅ Checklist

- [ ] I rewrote a function using arrow syntax
- [ ] I used template literals to log a sentence
- [ ] I tried optional chaining to access nested values

---

## 📘 FreeCodeCamp Companion

👉 [ES6 Syntax Overview](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)
