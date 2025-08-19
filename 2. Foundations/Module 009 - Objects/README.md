# Module 9: Objects

In this module, you’ll learn how to group data using objects — a key structure in real-world JavaScript and game logic.

---

## 💡 What You'll Learn
- How to create and access objects
- Dot vs bracket notation
- Nesting objects and using them with arrays

---

## ✍️ Code Examples

```javascript
let player = {
  name: "Piha",
  level: 5,
  isActive: true
};

console.log(player.name);      // Piha
console.log(player["level"]); // 5
```

---

## 🔤 Syntax

```javascript
let obj = {
  key1: value1,
  key2: value2
};

obj.key1       // dot notation
obj["key2"]    // bracket notation
```

---

## 🧠 Key Concepts

- Objects store related data as key-value pairs
- Keys are strings, values can be any type (even functions or arrays)
- You can access using either dot `.` or brackets `["key"]`

---

## ✅ Checklist

- [ ] I created an object with at least 3 key-value pairs
- [ ] I accessed object properties using dot and bracket notation
- [ ] I added a new property or modified an existing one

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Use Objects to Store Data](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
