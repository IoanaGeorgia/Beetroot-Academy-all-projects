
    // Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
// function ThisFunction(first, second){
//     first=prompt("Enter first number")
//     second =prompt("enter second number")
//     if (first >second){
//         return -2;
//     }
//     else if (second == first){
//         return 0;
//     }
//     else{
//         return 1;
//     }
// }

    // Write a function that counts the factorial of a given number. 
//     function Factorial(x){
//         x =prompt("Enter number")
//         let useful =1;
//         for (let i=1; i<=x;i++){
//             useful = useful*i
            
//         }
//         return(useful)
//     }
// Factorial()

    // Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
// function digitMaker(first, second,third){
//     first =prompt("first one:").toString()
//     second=prompt("second one").toString()
//     third =prompt("third one").toString()
//     return first+second+third
// }
// digitMaker()

// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 

// Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
// function PerfectOne(theperfect){
//     theperfect =prompt("enter here ur number")
//     let checker= 0
//     for (let i =1; i<theperfect/2; i++){
//         if (theperfect%i===0){
//             checker+=i;
//     }}
//     if (checker*2 == theperfect && checker*2 != 0){
//         console.log("Perfect number")
//     }
// }
// PerfectOne()

// Write a function that accepts the min and max values of a range, and 
//only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect. 
// function CheckingThis(minOne, maxOne){
//     minOne=prompt("Min value")
//     maxOne=prompt("Max value")
//     for(let i =minOne; i<=maxOne;i++){
//         let checker= 0
//         for (let x =1; x<i/2; x++){
//             if (i%x===0){
//                 checker+=x;
//         }}
//         if (checker*2 == i && checker*2 != 0){
//         console.log(i)
//         }
//         }
// }
// CheckingThis()

// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
// function TakeUrTime(hours, minutes, seconds){
//     hours=prompt("enter hour").toString()
//     minutes=prompt("enter minutes").toString()
//     seconds =prompt("enter seconds (or nothing if u have no seconds)").toString()
//     if (seconds){
//         console.log(hours+ ":" + minutes + ":" + seconds)
//     }
//     else{
//         console.log(hours+ ":" + minutes + ":00")
//     }
// }
// TakeUrTime()

// Write a function that accepts hours, minutes, and seconds and 
//returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
// function SecondOfMyLife(hours, minutes, seconds){
//      hours=prompt("enter hour")
//      minutes=prompt("enter minutes")
//      seconds =prompt("enter seconds")
//      console.log((hours*3600) + (minutes*60) + seconds)

// }
// SecondOfMyLife()

// Write a function that accepts the number of seconds, translates 
//it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
// function OneSecond(seconds){
//     seconds=prompt("enter seconds here")
//     let hours = Math.floor(seconds/3600)
//     let minutes = Math.floor(seconds%3600/60)
//     let second =Math.floor(seconds%3600%60)
//     console.log(hours + ":"+ minutes + ":" + second)

// }
// OneSecond()

// Write a function that counts the difference between the dates. 
//The function accepts 6 parameters that describe 2 dates, and returns 
//them as hh:mm:ss. While solving this problem use the functions from the two
// previous ones: at first, make the dates in seconds, count the difference in seconds, 
//and translate it back into hh:mm:ss.
/////Very confused about this one. I think we'd need a calendar to check for number of days of the month and leap years too
////also, what should be the output? months days? hours minutes seconds? all converted to seconds? 
//// Sorry, I am a bit confused.
