# Module 11: DOM Basics

Welcome to the world of browser interaction! In this module, you'll learn how to access and change elements on a webpage using JavaScript.

---

## 💡 What You'll Learn
- What the DOM is
- How to select elements with `document.querySelector()`
- How to change text and styles with `.innerText` and `.style`

---

## ✍️ Code Examples

```html
<!-- HTML -->
<p id="message">Hello!</p>
```

```javascript
// JavaScript
let msg = document.querySelector("#message");
msg.innerText = "Kia ora, world!";
msg.style.color = "blue";
```

---

## 🔤 Syntax

```javascript
document.querySelector("selector")         // Selects first matching element
element.innerText = "new text"             // Changes text
element.style.color = "value"              // Changes style
```

---

## 🧠 Key Concepts

- The DOM is a live map of the webpage that JS can modify
- `querySelector()` works with any valid CSS selector (`#id`, `.class`, `tag`)
- You can update text, styles, and more in real time

---

## ✅ Checklist

- [ ] I selected an element from the page
- [ ] I changed its content using `.innerText`
- [ ] I updated a style like color or font size

---

## 📘 FreeCodeCamp Companion

👉 [Manipulate the DOM](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
