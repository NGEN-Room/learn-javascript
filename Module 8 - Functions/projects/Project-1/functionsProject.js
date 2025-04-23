// #1 Calculate Tip
function calculateTip(total, percent) {
    if (total === 0) {
        return "Your Purchase Is Below $0";
    }
    else 
    return ("Your Total Tip Is $" + total * percent)
}
console.log(calculateTip(100, 0.15))

document.body.innerHTML += "<p>" + calculateTip(total, percent) + "</p>";

// #2 Print Receipt
function printReceipt(total, percent) {

}