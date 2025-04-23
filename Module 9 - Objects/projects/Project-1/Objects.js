// 1. Create an object `character` with keys:
//    - `name`, `class`, `level`, `isAlive`
// 2. Use `console.log()` to print each property
// 3. Update one property (like level or isAlive) and log it again


let character = {
    name: "Liam",
    class: "Depraved",
    level: 1,
    isAlive: true,
}

for (const key in character) {
    console.log((key + ": " + character[key]))
}
character.level = 2
character.isAlive = false

console.log(character)


