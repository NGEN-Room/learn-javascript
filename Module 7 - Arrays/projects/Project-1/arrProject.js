//Mk1
var arrTasks = ["Graphics", "Coding", "GameDev", "MediaProd"]
arrTasks.pop()
arrTasks.push("DigiMarket", "Hardware")

let i = 0;
while (i >= 4){
    alert( i )
    i++    
}
console.log(arrTasks)


//Mk2
var arrTasks = ["Graphics", "Coding", "GameDev", "MediaProd"]

for (const task of arrTasks){
    arrTasks.pop("Graphics", "Coding")
    arrTasks.push("DigiMarket", "Hardware")
}

console.log(arrTasks)