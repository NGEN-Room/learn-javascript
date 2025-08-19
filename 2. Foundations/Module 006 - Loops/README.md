# Module 6: Loops

In this module, you'll learn how to repeat actions using different types of loops.

---

## 💡 What You'll Learn
- `for` loops for counting
- `while` loops for conditional repetition
- Loop control: `break` and `continue`

---

## ✍️ Code Examples

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Loop #" + i);
}

let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
```

---

## 🔤 Syntax

```javascript
// for loop
for (initial; condition; step) {
  // code
}

// while loop
while (condition) {
  // code
}

// break and continue
if (something) break;
if (somethingElse) continue;
```

---

## 🧠 Key Concepts

- Use `for` when you know how many times to repeat
- Use `while` when you don’t know how many times
- `break` exits the loop early
- `continue` skips the current iteration

---

## ✅ Checklist

- [ ] I wrote a `for` loop
- [ ] I wrote a `while` loop
- [ ] I used `break` or `continue`

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Use Loops](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
