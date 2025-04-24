let die1 = Math.floor(Math.random()*6 + 1)
let die2 = Math.floor(Math.random()*6 + 1)
let total = die1 + die2
function doubles(d1, d2){
    if (d1 === d2)
    return ("you got a double")
    else return ("no doubles")
}
function highBall(tot){
    if (tot >= 9)
        return ("High Role")
    else if (tot <= 5)
        return ("Low Role")
    else 
        return ("Average Role")
    
}

console.log(die1)
console.log(die2)
console.log(total)
console.log(doubles(die1, die2))
console.log(highBall(total))