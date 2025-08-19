# Module 1: Environment Setup

Welcome to JavaScript! In this first module, you'll set up your tools and write your first JS file in a browser and in VS Code.

---

## 💡 What You'll Learn
- How to use VS Code to write JavaScript
- How to run JS code in the browser
- How to use the developer console
- How to create your first JS project

---

## 🌍 What is JavaScript?

JavaScript is a programming language that makes websites interactive.  
- HTML = structure (the house)  
- CSS = style (the paint & design)  
- JavaScript = interaction (the lights, doors, buttons that move)  

JavaScript runs in every modern web browser, and it can also run on your computer with **Node.js**.

---

## ⚙️ Setup Checklist

1. **Install VS Code**
   👉 https://code.visualstudio.com/

2. **Install Node.js** (optional, for advanced modules)
   👉 https://nodejs.org/
   - After installing, open your terminal and check it works with:
     ```
     node -v
     ```
     (this should print a version number)

3. **Create your workspace**
   - Make a new folder `learn-js`
   - Inside, create a file `index.html` and another `script.js`

4. **Connect your JS file**
```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My First JS</title>
</head>
<body>
  <h1>Hello, JavaScript!</h1>
  <script src="script.js"></script>
</body>
</html>
```

---

## ✍️ Your First JS
```javascript
// script.js
console.log("Welcome to JavaScript!");
```

---

## ✍️ run your first console.log

### Option 1: Run in the Browser Console

1. Open Chrome or Firefox.  
2. Right click anywhere > Inspect > Console tab.  
3. Type `console.log("Hello from the browser!")` and press Enter.  

### Option 2: Run with Node (Optional)

- in your terminal run
```bash
node script.js
```
- make sure your terminal is in the correct directory

---
## 🧠 Key Concepts

- `console.log()` outputs messages to the browser’s dev tools
- `<script src="">` connects your JS file to HTML
- JS files end with `.js` and run top-to-bottom

---

## ✅ Checklist

- [ ] I wrote my first line of JavaScript!  
- [ ] I opened the DevTools console and saw my output.  
- [ ] I linked my JavaScript file to HTML successfully.  
- [ ] I ran my code in Node.js (optional).  

---

## 📘 FreeCodeCamp Companion

To reinforce what you’ve learned, try these interactive lessons:

👉 [Basic JavaScript – FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript)
