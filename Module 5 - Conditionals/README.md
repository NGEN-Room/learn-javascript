# Module 5: Conditionals

This module introduces `if`, `else if`, `else`, and `switch` — the logic behind making decisions in code.

---

## 💡 What You'll Learn
- How to use `if`, `else if`, and `else` statements
- How to compare values with `===`, `>`, `<`, `!==`, etc.
- How to use a `switch` statement for multiple fixed options

---

## Syntax

if (x opereator y) {
  do something here
}

else {
if the above isnt true then do this instead
}

## ✍️ Code Examples

```javascript
let age = 17;

if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a youth.");
}

let color = "green";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Unknown color.");
}
```

---

## 🧠 Key Concepts

- Always use `===` instead of `==` (strict equality)
- `if/else` is great for comparing ranges
- `switch` is best for fixed options (like colors or commands)

---

## ✅ Checklist

- [ ] I used `if`, `else`, and `else if` to check conditions
- [ ] I used `===`, `>`, `<`, or `!==` in comparisons
- [ ] I tried a `switch` statement

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Use Conditional Logic](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
