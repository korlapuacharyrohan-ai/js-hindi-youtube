const name = "rohan" // 1ST WAY TO INITIALIZE A STRING
const repocount = 50

// console.log(name + repocount + "value") OLD METHOD

//console.log(`HELLO MY NAME IS ${name} AND MY REPO COUNT IS ${repocount}`) //NEW METHOD

const gameName = new String("rohanachary") // 2ND WAY TO INITIALIZE A STRING 

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("r"))

const newString = gameName.substring(0, 4) // THE LAST CHAR IS NOT INCLUDED EX:- OUTPUT IS "roha"
// console.log(newString)

const anotherString = gameName.slice(-4, -2) //IT TAKES THE -VE VALUES 
//console.log(anotherString)

const newStringOne = "   rohan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rohan.com/rohan23.achary"
console.log(url.replace('23','30'))

console.log(url.includes('sundar'))// TO FIND THE CERTAIN OBJECT IS INCLUDED OR NOT.


