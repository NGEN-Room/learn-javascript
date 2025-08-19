# Challenge – Numbers & Math Practice

## 🧠 Goal:
Practice doing arithmetic with `+ - * / %`, use `Math.random()` and rounding methods, and store results in variables.

---

## 🔧 Instructions

1. Create a new folder called `challenge-4`.
2. Inside it, make two files:
   - `index.html`
   - `script.js`
3. Link your `script.js` file inside `index.html` using a `<script>` tag.
4. In your `script.js`, complete the tasks below and `console.log()` your results.

---

### Task 1 — Dice Roller (1–6)
Use `Math.random()` to simulate rolling a single dice and print the result.
```js
// your code here
```
**Hint:** `Math.floor(Math.random() * 6) + 1`

---

### Task 2 — Shopping Total
You’re buying `quantity = 3` hoodies at `price = 27.95` each.  
- Calculate the **subtotal**.  
- Add **GST 15%** (tax).  
- Calculate the **grand total**.  
- Round the grand total to the **nearest whole number** and also to **2 decimal places** (using math).

```js
// Example variables to start with:
let price = 27.95;
let quantity = 3;
let gstRate = 0.15;
// your code here
```
**Hint:** For two decimals without `toFixed`, try:  
`Math.round(value * 100) / 100`

---

### Task 3 — Remainder Checker
You have `23` lollies and `5` friends. If you share them evenly, how many lollies are **left over**?
```js
// use the % operator
```

---

### Task 4 — Rounding Lab
Start with `let n = 4.5;`  
- Log `Math.floor(n)`, `Math.ceil(n)`, and `Math.round(n)`.  
- Change `n` to `4.4` and repeat. What do you notice?

```js
// your code here
```

---

## ✅ Bonus Challenges
- **Double Dice:** Roll two dice and log both values and their **sum**.  
- **Random 1–100:** Generate a random integer between `1` and `100`.  
- **Budget Check:** You have `$100`. After buying the hoodies from Task 2, how much **change** do you have? (Round to two decimals.)

---

## ▶️ How to Run
Open your `index.html` in the browser → Right-click → Inspect → **Console** → See your output!

---

👉 This challenge reinforces:
- Arithmetic with `+ - * / %`
- Random integers with `Math.random()` + `Math.floor()`
- Rounding with `Math.floor()`, `Math.ceil()`, `Math.round()`
- Storing intermediate results in variables (subtotal, tax, total)
