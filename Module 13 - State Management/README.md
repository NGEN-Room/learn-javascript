# Module 13: State Management Pattern

In this module, you'll learn how to use variables to keep track of data that changes — a simple version of what React does behind the scenes.

---

## 💡 What You'll Learn
- What "state" means in programming
- How to track and update state with variables
- How to reflect state changes in the DOM

---

## ✍️ Code Examples

```html
<button id="toggleBtn">Toggle</button>
<p id="status">OFF</p>
```

```javascript
let isOn = false;

document.querySelector("#toggleBtn").addEventListener("click", () => {
  isOn = !isOn;
  document.querySelector("#status").innerText = isOn ? "ON" : "OFF";
});
```

---

## 🔤 Syntax

```javascript
let state = initialValue;

function updateState(newValue) {
  state = newValue;
  // Update the DOM or log something
}
```

---

## 🧠 Key Concepts

- "State" = the current data of something (e.g. is it on or off?)
- Changing state means updating a variable
- Updating the DOM lets users see the new state

---

## ✅ Checklist

- [ ] I declared a state variable
- [ ] I updated the state in response to an event
- [ ] I reflected the state change in the DOM

---

## 📘 FreeCodeCamp Companion

👉 [Basic JavaScript: Variables and Conditions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
