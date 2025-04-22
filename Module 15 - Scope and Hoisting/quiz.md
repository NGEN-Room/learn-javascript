# Quiz – Scope & Hoisting

1. What’s the difference between global, block, and function scope?
2. What does “hoisting” do to a `var` declaration?
3. What’s the difference in behavior between `var` and `let` when used before declared?
4. What’s the output?
```javascript
var a = 1;
function test() {
  var a = 2;
  console.log(a);
}
test();
console.log(a);
```
5. Why does this throw an error?
```javascript
console.log(cat);
let cat = "Luna";
```
