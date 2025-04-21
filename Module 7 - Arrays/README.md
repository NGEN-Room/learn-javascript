# Module 7: Arrays

In this module, you'll learn how to store multiple values in a single variable using arrays.

---

## 💡 What You'll Learn
- How to create and access arrays
- How to use `.length`, `.push()`, `.pop()`
- Looping through arrays

---

## Syntax

var arrayName = [] *this is how you establish an empty array*


## ✍️ Code Examples

```javascript
let colors = ["red", "blue", "green"];
console.log(colors[0]); // "red"
console.log(colors.length); // 3

colors.push("yellow");  // adds to end
colors.pop();           // removes last
```

---

## 🔤 Syntax

```javascript
let arr = [value1, value2, value3];
arr[index]              // access
arr.push("new")         // add to end
arr.pop()               // remove last
arr.length              // count items

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

## 🧠 Key Concepts

- Arrays are zero-indexed (first item is index 0)
- `.length` returns the number of items
- `.push()` adds, `.pop()` removes from the end

---

## ✅ Checklist

- [ ] I created an array with at least 3 items
- [ ] I accessed an item using its index
- [ ] I added and removed items with `.push()` and `.pop()`

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Manipulate Arrays](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/)
