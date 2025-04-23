let name = "sam"
let message = "   HelLo ThERe HoW aRE You   "
let messageLower = message.toLowerCase()
let messagecleaned = messageLower.trim()
let messageShout = messagecleaned.toUpperCase()
let mm = 5

console.log(`kia ora ${name}`)
console.log(messagecleaned)
console.log(messagecleaned.includes("how are you"))
console.log(messagecleaned.length)
console.log(messageShout)
console.log(`You have ${mm} missed messages`)