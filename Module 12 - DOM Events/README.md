# Module 12: DOM Events

In this module, you’ll learn how to make your webpages interactive by responding to user actions like clicks or keypresses.

---

## 💡 What You'll Learn
- How to use `addEventListener()`
- Common events like `click`, `keydown`, `input`
- Creating functions to run when events happen

---

## ✍️ Code Examples

```html
<button id="myBtn">Click Me</button>
```

```javascript
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

---

## 🔤 Syntax

```javascript
element.addEventListener("event", function () {
  // what happens
});
```

Events include: `"click"`, `"input"`, `"keydown"`, `"submit"`, `"mouseover"`

---

## 🧠 Key Concepts

- You can listen for actions from users (clicks, keys, typing)
- Functions inside event listeners are called "handlers"
- Separate logic and display by calling other functions inside handlers

---

## ✅ Checklist

- [ ] I added a click listener to a button
- [ ] I used a function to respond to the event
- [ ] I used `console.log()` to check if it worked

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Handling Events](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
