# Module 18: Modules & Imports

In this module, you'll learn how to organize your code using ES6 modules — a critical step before moving into frameworks like React.

---

## 💡 What You'll Learn
- How to export and import functions or variables
- Default vs named exports
- How to structure code across files

---

## ✍️ Code Examples

```javascript
// math.js
export function add(x, y) {
  return x + y;
}

// app.js
import { add } from './math.js';
console.log(add(2, 3));
```

---

## 🔤 Syntax

```javascript
// Export
export const name = "Piha";
export default function greet() { ... }

// Import
import { name } from './file.js';
import greet from './file.js';
```

---

## 🧠 Key Concepts

- Named exports use `{}` brackets when imported
- Default exports don’t use `{}` and can be renamed
- Each file becomes its own “module” — helps organize and reuse code

---

## ✅ Checklist

- [ ] I created a file that exports a function
- [ ] I imported it into another file
- [ ] I ran it in the browser using `<script type="module">`

---

## 📘 FreeCodeCamp Companion

👉 [ES6 Modules](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)
