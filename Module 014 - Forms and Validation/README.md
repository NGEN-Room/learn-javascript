# Module 14: Forms & Validation

In this module, you’ll learn how to get input from users and make sure it's valid before using it.

---

## 💡 What You'll Learn
- How to capture form input
- How to prevent a form from refreshing the page
- How to validate and clean data with JavaScript

---

## ✍️ Code Examples

```html
<form id="loginForm">
  <input id="username" type="text" />
  <button type="submit">Submit</button>
</form>
```

```javascript
document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload
  let username = document.querySelector("#username").value.trim();

  if (username === "") {
    alert("Please enter a username.");
  } else {
    console.log("Welcome,", username);
  }
});
```

---

## 🔤 Syntax

```javascript
e.preventDefault();            // prevent form submission
input.value                   // get input value
.value.trim()                 // clean up whitespace
```

---

## 🧠 Key Concepts

- Forms refresh the page by default — use `preventDefault()`
- `.value` gets what the user typed
- `.trim()` cleans up extra spaces
- You can validate for required fields, length, format, and more

---

## ✅ Checklist

- [ ] I created a form with an input and button
- [ ] I prevented the page from refreshing
- [ ] I validated the input before using it

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Input and Conditionals](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
