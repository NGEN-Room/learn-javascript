# Module 19: Local Storage

This module introduces `localStorage` — a built-in browser feature that lets you save data between visits without a database.

---

## 💡 What You'll Learn
- How to use `localStorage.setItem()` and `getItem()`
- How to store and retrieve JSON data
- How to persist user input or app state

---

## ✍️ Code Examples

```javascript
localStorage.setItem("username", "Piha");

let name = localStorage.getItem("username");
console.log(name); // "Piha"
```

```javascript
let data = { level: 3, score: 42 };
localStorage.setItem("saveData", JSON.stringify(data));

let loaded = JSON.parse(localStorage.getItem("saveData"));
console.log(loaded.level); // 3
```

---

## 🔤 Syntax

```javascript
localStorage.setItem("key", "value");
localStorage.getItem("key");
localStorage.removeItem("key");

JSON.stringify(obj); // convert object to string
JSON.parse(str);     // convert string back to object
```

---

## 🧠 Key Concepts

- `localStorage` only stores **strings**
- Use `JSON.stringify()` to save objects and arrays
- Data stays in the browser even after refresh or tab close

---

## ✅ Checklist

- [ ] I saved a string to localStorage
- [ ] I retrieved it and displayed it
- [ ] I stored an object using JSON

---

## 📘 FreeCodeCamp Companion

👉 [Web Storage API](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
