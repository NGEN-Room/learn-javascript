# Module 16: Arrays & Objects Combo

This module teaches how arrays and objects work together — the backbone of real-world data in apps and games.

---

## 💡 What You'll Learn
- How to store objects inside arrays
- How to access and update properties of objects in arrays
- How to loop through arrays of objects

---

## ✍️ Code Examples

```javascript
let inventory = [
  { name: "Potion", quantity: 2 },
  { name: "Sword", quantity: 1 }
];

console.log(inventory[0].name); // Potion
inventory[1].quantity++;        // add one sword
```

---

## 🔤 Syntax

```javascript
array[index].property       // access object in array
for (let item of array) {   // loop through each object
  console.log(item.name);
}
```

---

## 🧠 Key Concepts

- Arrays hold lists of things
- Objects represent each item’s properties
- You can loop through an array and interact with each object

---

## ✅ Checklist

- [ ] I created an array of objects
- [ ] I accessed object properties from within the array
- [ ] I looped through the array and logged multiple properties

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Iterate Through an Array with a For Loop](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
