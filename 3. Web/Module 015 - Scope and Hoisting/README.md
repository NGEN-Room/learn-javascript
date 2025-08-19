# Module 15: Scope & Hoisting

In this module, you'll learn where variables live (scope) and how they behave before they're declared (hoisting).

---

## 💡 What You'll Learn
- Block vs function vs global scope
- The difference between `var`, `let`, and `const`
- What "hoisting" means and how it affects variables

---

## ✍️ Code Examples

```javascript
let x = 10;

function showScope() {
  let x = 5;
  console.log(x); // 5
}
showScope();
console.log(x);   // 10
```

```javascript
console.log(y); // undefined
var y = 3;

console.log(z); // ReferenceError
let z = 4;
```

---

## 🔤 Syntax

```javascript
// Global scope
let name = "global";

// Function scope
function greet() {
  let name = "function";
}

// Block scope
if (true) {
  let age = 21;
}
```

---

## 🧠 Key Concepts

- `let` and `const` are block scoped; `var` is function scoped
- Hoisting = variable declarations (not values) are moved to the top
- Use `let` or `const` to avoid bugs with hoisting

---

## ✅ Checklist

- [ ] I declared variables in different scopes
- [ ] I saw the difference in how `var` vs `let` behave
- [ ] I learned why `console.log()` sometimes throws errors

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Scope and Hoisting](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
