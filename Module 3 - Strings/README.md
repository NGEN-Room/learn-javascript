# Module 3: Strings

In this module, you'll learn how to work with text in JavaScript using string variables, interpolation, and built-in string methods.

---

## 💡 What You'll Learn
- How to use and combine string values
- String interpolation using template literals
- Common string methods like `.length`, `.toUpperCase()`, `.includes()`
- How to manipulate and clean up string data

---

## ✍️ Code Examples

```javascript
let name = "Aroha";
let greeting = `Kia ora, ${name}!`;
console.log(greeting); // Kia ora, Aroha!

let message = "   Learn JavaScript   ";
console.log(message.trim());           // "Learn JavaScript"
console.log(message.toUpperCase());    // "   LEARN JAVASCRIPT   "
console.log(message.includes("Script")); // true
```

---

## 🧠 Key Concepts

- Template literals: `` `Hello, ${name}` ``
- String methods help clean, check, or transform data
- Strings are immutable — methods return a *new* string

---

## ✅ Checklist

- [ ] I used string interpolation
- [ ] I explored at least 3 string methods
- [ ] I cleaned or formatted string data

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: String Operations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
