// Conditional Statements

// 1. if condition

// let age=18
// if(age>=18){
//     console.log("Vote")
// }

// 2. if-else condition

// let age = 15
// if (age >= 18) {
//     console.log("Vote")
// } else {
//     console.log("Not Vote")
// }

// 3. if-else-if condition
// let marks = 32
// if (marks >= 90) {
//     console.log("Grade A")
// } else if (marks >= 60) {
//     console.log("Grade B")
// } else if (marks >= 33) {
//     console.log("Grade C")
// }
// else {
//     console.log("Failed")
// }

// 4. switch case
// let day = 6
// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     default:
//         console.log("Other Day")
// }


// Looping statements

// for loop
// for(let i=1; i<=10; ++i){
//     console.log(i)
// }

// while loop
// let i=1;
// while(i<=5){
//     console.log(i)
//     ++i
// }

// do-while loop
// let start=1
// do{
//     console.log(start)
//     start++
// }while(start>=8);



// Jumping statemnt
// continue

// for(let i=1; i<=10; ++i){
//    if(i==5){
//     continue
//    }
//     console.log(i)
// }

// return
function checkNum(num){
    if(num>0){
        return "Positive"
    }
    return "Eqal to Zero or Negative"
}

const result=checkNum(-7)
console.log(result)