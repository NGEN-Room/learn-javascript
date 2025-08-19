# Module 3: Strings

In this module, you'll learn how to work with text in JavaScript using string variables, interpolation, and built-in string methods.

## 🌍 What is a String?

A string is just text inside quotes.  
You can use:
- Single quotes `'Hello'`
- Double quotes `"Hello"`
- Backticks `` `Hello` `` (these also let us do interpolation)

---

## 💡 What You'll Learn
- How to use and combine string values
- String interpolation using template literals
- Common string methods like `.length`, `.toUpperCase()`, `.includes()`
- How to manipulate and clean up string data

---

## ✍️ Code Examples

```javascript
let single = 'Hello';
let double = "Hello";
let backtick = `Hello`;
```

```javascript
let name = "Aroha";
let greeting = `Kia ora, ${name}!`;
console.log(greeting); // Kia ora, Aroha!

let message = "   Learn JavaScript   ";
console.log(message.trim());           // "Learn JavaScript"
console.log(message.toUpperCase());    // "   LEARN JAVASCRIPT   "
console.log(message.includes("Script")); // true
```

```javascript
let word = "hello";
word.toUpperCase();
console.log(word); // still "hello"
```

---

## 🧠 Key Concepts

- Template literals: `` `Hello, ${name}` ``
- String methods help clean, check, or transform data
- Strings are immutable — methods return a *new* string

---

## ✅ Checklist

- [ ] I created strings with single, double, and backticks.  
- [ ] I used string interpolation.  
- [ ] I tried at least 3 string methods.  
- [ ] I noticed that strings don’t change — methods return new ones.  

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: String Operations](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)
