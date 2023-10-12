// let colors = ["red","yellow","blue","gray","purple"];

// // for (let i = 0; i < colors.length; i++) {
// // console.log(colors[i]);
// // }

// for( let color of colors) {
//     console.log(color)
// }


// let services = ["light cleaning", "deep cleaning", "college turnover", "events"];

// // for ( let i = 0; i < services.length; i++) {
// //     console.log(services[i]);
// // }

// for (let service of services){
//     console.log(service)
// }


// let grades = [99, 98, 76, 54, 66, 98, 81];
// let sum = 0;

// for ( let average of grades){
//     console.log(average);
// }


// function greet () {
//     console.log("Hi, how do you do?")
// }

// function repeat (num, func) {
//    for (let i = 0; i < num; i++ ) {
//     func();
//    }
// }

// First Class Function Practice

// function greet () {
//     console.log("You are the best!");
//     console.log("Keep Going!");
// }

// function duolingo() {
//     console.log("Duolingo is very challenging this week!");
// }

// function mySchedule() {
//     console.log("I work from Tuesday to Saturday 10:30am to 6:30pm")
// }

// function repeat (num, func) {
//     for (let i = 0; i < num; i++){
//         func();
//     }
// }



// PUTTING FUNCTIONS IN AN ARRAY
// let funcs = [greet, duolingo, mySchedule];

// funcs[2]()
// funcs[0]()

// DECLARING A FUNCTION INTO A VARIABLE

// const addingFunc = function add(x,y) {
//     return x + y;
// }

// const multiplyFunc = function multiply(x,y) {
//     return x * y;
// }

// function makeMultiplyFun(num) {
//     return function mult(x) {
//         return num * x;
//     }
// }

// const double = makeMultiplyFun(2)

// const actualDouble = function mult(x) {
//     return 2 * x;
// }

// const quad = makeMultiplyFun(4)

// greet();
// setTimeout(duolingo, 5000);
// greet();


///SETINTERVAL SINTAX
// setInterval(duolingo, 1000)
// clearInterval(1)

// const id = setInterval(duolingo, 2000);


// countdown

// let i = 1;
// const iMin = 0;
 
// function countdown (num) {

//     if (num >= i) {
//     console.log(intervalID);
    
//         if (i < iMin) {
//         clearInterval(intervalID);
//         console.log("DONE!");
//     }
//     }
// }
 
// const intervalID = setInterval(countdown, 1000);
 
// countdown(10)

// function countDown() {

//     currentTime--
    
    
//     if(currentTime === 0) {
//         clearInterval(timerId)
//         console.log("DONE!")
//     }
// }

// let timerId = setInterval(countdown, 1000)

// const countdown = countdown(num);

// function alertMe() {
//    console.log("Look at Me Now!")
// }
// const timerId = setInterval(alertMe, 5000)

// clearInterval(timerId)

// function countDown (num) {

    
//     const i = num;
    
//     for (let i = 0; i < num; i--) {

//     if(i <= 0) {
//         console.log("DONE!")
//     }
//     else{
//         console.log([i])
//     }

// }

// }



// function greet() {
//     console.log("How are you?")
//     return function greetAgain() {
//         return "I said: How are you??"
//     }
// }



























