//Variables + Data types
// in js there is thrre way to declare a variable, 1. var(old), 2. let(new), const



//var = 1; // hosting...
let y = 2; // let keyword prefered (it is more strict)

// convention to upcase constant that in the don't change
//const PI = 3.14
//PI = 2.3 // cause js does not let me reasign a const


// variable a name value, and that calue is going to have a type
//undefined,null,boolean, number, string, object, array, Date
//a variable is going to have scope (b=visibility)

// is scoped to the file
// let age = 34

// const foo =()=>{
//     // bar is scoped to the function
//     let bar =21
//     console.log(age)
//     console.log(bar)
// }
// foo()//34
// console.log(bar)// 'yoyo'
// let age= 21
// let name = 'yoyo'

// const written3daysAgo = ()=>{
//     // bar is scoped
//     console.log(age)
//     console.log(`Hello ${name}`)
// }
// foo(12)// 34
// console.log(bar)

// javascript is a non type language - you done have to declare
// add('1',1) => '11' = which is probably not what you what

// console.log(typeof 1); // number
// console.log(typeof typeof 1); // string
// console.log(typeof "yo"); // string
// console.log(typeof 1.2); // number
// console.log(typeof []); // object: huh?
// console.log([] instanceof Array); // true: see it is an array
// console.log(typeof { yo: "asdf" }); // object
// console.log({ yo: "asdf" } instanceof Object); // true
// console.log(typeof true); // boolean
// typeof null // object

////////////////////////////////////////////////----------------------/-----------------------
// conditions

const season = "spring";

if (season === "spring") {
  console.log("yeah for spring");
} else if (season === "summer") {
  console.log("yeah for Summer");
} else if (season === "fall") {
  console.log("yeah for fall");
} else {
  console.log("yeah for winter");
}

// switch - another if else if (preffered if 3 or more)
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// // }
// switch (season) {
//   case "spring":
//     console.log("yeah for spring");
//     break; // exit this switch statment
//   case "summer":
//     console.log("yeah for summer");
//     break;
//   case "fall":
//     console.log("yeah for summer");
//     break;
//   default:
//     console.log("yeah for winter");
//     break;
// }

// let num = 5 
// let isOdd
// if(num%===0){
//     isOdd = false
// } else {
//     isOdd = true
// }
// // ternary
// isOdd = num % 2 === 0 ? true or false

// let x = 1
// // short circuit evaluation 
//  if(x){
// console.log('true/truthy'){

// } else {
//     console.log('false/falsey')
// }

//  }
 
 

 // turthy falsy



 // Functions
// - breaks our code into manageable chunks
// - should perform a single task
// - should have a concise name
// - perform an action or/and return some data
// let x = 1
// let y = x
// console.log(y) // 1
//////////////////////

// const foo = () =>{
//     return 'yo'
// }

// let bar = foo
// console.log(bar) // [Function: foo]
// console.log(bar()) // yo

//////////////////////

// const foo = () =>{
//     return 'yo'
// }



// let bar = foo()
// console.log(bar) // yo


// //////////////////////
// const foo = (bam)=>{
//     return bam[0]
// }

// console.log(foo('hello')) //'h'
// console.log(foo(['a','b','c'])) //'a'
// console.log(foo({})) // undefined

// // //////////////////////
// const foo = (bam)=>{
//     return bam()
// }

// const baz = () =>{
//     return 1 + 1
// }
// let whatisthis = foo(baz)
// console.log(whatisthis) // 2

// //////////////////////
// const foo = (bam)=>{
//     return bam()
// }

// const baz = () =>{
//     return 1 + 1
// }
// let whatisthis = foo(baz())// ERROR
// console.log(whatisthis) 

// baz => function
// baz() => 2

//////////
// let foo = () =>{
//     return ()=> {
//         return 1
//     }
// }

// let funcYo = foo()
// console.log(funcYo) // [Function (anonymous)]
// console.log(funcYo()) // 1

///////
// const add = (num1, num2) => {
//     return num1 + num2
// }

// let sum1 = add(1,1)
// let sum2 = add(3,5)
// console.log(sum1) // 2
// console.log(sum2) // 8

// //(ONLY with arrow function)
// // without {} there implicit return
// const addShort = (num1, num2) => num1 + num2
// console.log(addShort(2,2))

/////////
// const foo = () => 1
// console.log(foo) // function foo
// console.log(foo()) // 1

///////
// const add = (num1, num2) => {
//     return num1 + num2
// }

// () => add(1,2)
// console.log(foo) // function
// console.log(foo()) // 3

// help with hw2
const myFilter = (arr,func) => {
    let itemsToKeep = []
    arr.forEach((currentItem)=>{
        // how do i know if I want to keep the thing
        // when i don't even know what the thing is.
        // ok if you(the person using myFilter) give me
        // a function that return true when give the thing then
        // i can make
        if(func(currentItem)){
            itemsToKeep.push(currentItem)
        }
    })
    return itemsToKeep

}

let x = myFilter([1,2,3,4,5], (num)=> {
    return num%2 ===0
})
let y = myFilter([{name:'tony', age:21},{name:'bob',age:12}], (person)=> person.age >= 21)
console.log(x)
console.log(y)

// ---------------------------------------------------------------
const myForEachLoop = (arr, func) =>{
    for(let i=0; i< arr.length; i++){
        func(arr[i])
    }
}

let yo = myForEachLoop([1,2,3,4,5], (thing)=> {console.log(thing)})
console.log(yo)

// goes in the array calls function and what that function is pushed into 
// in a new array. and at the that array is returned
const myMap = (arr, func) =>{
    let itemsToReturn = []
    for(let i=0; i< arr.length; i++){
        // create a new thing with the function they give me
        let newThing = func(arr[i])
        itemsToReturn.push(newThing)
    }
    return itemsToReturn
}

let yo1 = myMap([1,2,3,4,5], (thing)=> thing *2)
console.log(yo1) //
// ---------------------------------------------------------------
// THIS IS THE .REDUCE FUNC FOR AN ARRAY
let nums = [1,2,3,4]

// some random task with reduce
let total = nums.reduce((accum, currentItem)=>{
    console.log('accum:', accum)
    console.log('currentItem:', currentItem)
    console.log('currentItem: + accum:', currentItem + accum)

    // what this function returns becomes the next accum
    return accum + currentItem
}, 0)

console.log(total)

// filter with reduce
let evens = nums.reduce((accum, currentItem)=>{
    if(currentItem % 2 === 0){
        accum.push(currentItem)
    }
    console.log('accum:', accum)
    return accum
}, [])

console.log(evens)


// map with reduce
let html = nums.reduce((accum, currentItem)=>{
    accum.push(`<p>${currentItem}</p>`)
    return accum
}, [])
console.log(html)