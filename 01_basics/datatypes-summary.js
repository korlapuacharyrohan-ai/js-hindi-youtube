//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail; // undefined 

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId)

// const bigNumber = 234984644893245


// Reference (Non primitive)

// Array, Objects, Functions
 
// const heros = ["rohan","ironman"] // arrays

// let obj = {  //Objects
//     name: "rohan",
//     age:22,
// }

// const myFunction = function(){ //Function
//     console.log("hello rohan")
// }

// console.log(typeof obj)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-prmitive)

// In stack the memory is stored as a copy of the original 

/* for example 
 let name = "rohan"
 let name1 = name
name1 = "achary"

 console.log(name)
 console.log(name1) */

//(PRIMITIVE)
 //by this we get to know that when we make change in the other variable (name1) which was further given the value of (name) and when the (name1) value is changed the value of (name1) is changed but the value of (name) is not changed.

 let userOne = {
    email: "user@google.com",
    upi:"rohan@ybl"
 }

 let user2 = userOne

 user2.email = "achary@gmail.com"
 console.log(userOne.email)
 console.log(user2.email)
 
// By this we get to know that if we even change in (user2) which had the reference of (userOne) the information in userOne will also be changed.


// Primitive values goes inside STACK MEMORY TYPE
// Non- Primitive values goes inside HEAP MEMORY TYPE


