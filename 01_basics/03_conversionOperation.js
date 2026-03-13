let score = "33"

// ways to see the type of datatype
// console.log(typeof score)
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// if initialized with any type of value it returns TRUE
// if nothing is initialized then it returns FALSE



// *********************** OPERATIONS *********************** 

let value = 3
let negvalue = -value
// console.log(negvalue)

let str1 = "hello"
let str2 = " rohan"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // agar string pehle rahega toh kuch arithmatic operation nahi hoga 
// console.log(1 + 2 + "2"); // agar arithmatic operation rehta hai toh wo solve hoga aur uske badh string jese diya hai print hoga 

let x  = 1
const y  = ++x

console.log(`x:${x},y:${y}`)

