let diceRoll = Math.floor(Math.random() * 6) + 1

let price = 27.95;
let quantity = 3;
let gstRate = 0.15;
let subTotal = price * quantity;
let totalValue = subTotal / gstRate;
let grandTotal = Math.round(totalValue * 100) / 100



console.log(diceRoll)

console.log(price)
console.log(quantity)
console.log(subTotal)
console.log(gstRate)
console.log(grandTotal)


