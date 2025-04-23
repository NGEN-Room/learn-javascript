// 1. Create two arrays:
//    - `bag1 = ["potion", "map"]`
//    - `bag2 = ["sword", "key"]`

// 2. Merge them into `fullBag` using spread

// 3. Use destructuring to assign:
//    - `firstItem` and `secondItem` from `fullBag`

// 4. Log the merged inventory and key items     (BOT IDEA) --- L,B,A


let bag1 = ["potion", "map"]
let bag2 = ["sword", "key", "coin"]

let fullBag = [...bag1, ...bag2]
let [firstItem, secondItem ,thirdItem, fourthItem, fifthItem] = fullBag

let addedItems = [fullBag.pop(fourthItem), fullBag.push("gold", "armor")]

console.log(fullBag)

console.log(firstItem + ", " + thirdItem)

// master bag attempt with an upgrade feature 

function upgradeBag(bag1, bag2) {
    if (letherBag + hardLeatherBag) && (fullBag + dragonHideBag) 
        let fullBag = [...bag1, ...bag2] //ight now i gott fix this lmao

}
    

let letherBag = ["itemSlot1", "itemSlot2"]
let hardLeatherBag = ["itemSlot3"]
let dragonHideBag = ["itemSlot4", "itemSlot5"]


console.log(upgradeBag(letherBag, hardLeatherBag))



















