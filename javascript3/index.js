

//Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
// let yourNumber =prompt("Enter here your number, random internet person: ")
// var usefulNumber =0
// for (let i =1; i<= yourNumber; i++ ){
//     usefulNumber+=i
//     console.log(usefulNumber)
// }

// Request two numbers and find only their largest common divisor.
// let first=prompt("Enter your first number here...")
// let second =prompt("Enter your second number here...")
// function largest(firstOne, secondOne) {
//     if (!secondOne) {
//       return firstOne;
//     }
  
//     return largest(secondOne, firstOne % secondOne);
//   }
// console.log(largest(first, second))


// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
// let nrToBeDivided =prompt("Enter ur number here...")
// for (let i=1; i<=nrToBeDivided; i++){
//     if(nrToBeDivided % i == 0){
//         console.log(i)
//     }
// }

// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
// let yourNr=prompt("Enter your number here, preferably your fav large number")
// let useMeNR =0;
// for (let i =0; i<=yourNr.length-1; i++){
//     useMeNR +=1;
//     }
// console.log(useMeNR)

// Request 10 numbers from a user and count, how many are positive, negative, or zero. 
//Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 
// let manyNumbers =prompt("enter here ur maaaaaany (10) numbers separated by a coma pls").split(",")
// let negativeNumber = 0;
// let zeroNumber= 0;
// let positiveNumber=0;
// let oddNumber=0;
// let evenNumber=0;
// for (let i=0; i<manyNumbers.length; i++){
//     if (manyNumbers[i] <0){
//         negativeNumber +=1;
//     }
//     if(manyNumbers[i] ==0){
//         zeroNumber +=1;
//     }
//     if(manyNumbers[i]>0){
//         positiveNumber +=1;
//     }
//     if(manyNumbers[i]%2 !=0){
//         oddNumber +=1;
//     }
//     if(manyNumbers[i]%2 == 0){
//         evenNumber +=1;
//     }

// }
// console.log("Number of negative numbers: ",negativeNumber)
// console.log("Number of numbers equal to zero: ",zeroNumber)
// console.log("Number of positive numbers: ",positiveNumber)
// console.log("Number of odd numbers: ",oddNumber)
// console.log("Number of even numbers: ",evenNumber)


// Loop a calculator. Request 2 numbers and a sign, solve the problem, 
//display the result and ask if the user wants one more. The loop continues until the user refuses. 
// while(true){
//     let consent=prompt("Do u want more? yes/no :" ).split(",")
//     if (consent == "yes"){
//         let calculating =prompt("enter 2 numbers and a sign")
//         if (calculating[2] == "+"){
//             alert(calculation[0] + calculating[1])
//         }
//         if(calculating[2] == "-"){
//             alert(calculating[0]-calculating[1])
//         }
//         if (calculating[2] == "*"){
//             alert(calculating[0]*calculating[1])
//         }
//         if(calculating[2]=="/"){
//             alert(calculating[0]/calculating[1])
//         }
//     }
//     else{
//         break
//     }
// }


// Loop day input like this: «Day of the week. 
//Would you like to see the next one?» which continues as long as the user clicks OK.
//I don't really know how to do this one without manually writing the if statement for each day so I assume I am doing it wrong :(
// let daysAll =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// while(true){
//     let ok=confirm("Days of the week. Would you like to see the next one?")
//     if (ok){
//         alert(daysAll[0])
//         let ok1=confirm("Days of the week. Would you like to see the next one?")
//         if(ok1){
//             alert(daysAll[1])
//             let ok2=confirm("Days of the week. Would you like to see the next one?")
//         }
//         }
//  else{
//     break
//  }
// }

// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
// let Nr =prompt("enter ur number here")
// for (let i=0; i<=10; i++){
//     console.log(i*Nr)
// }

// “Guess the number” game. Suggest a user to think of a number from 0 to 100 
//and guess it in the following way: every loop iteration needs to divide the range 
//of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” 
//Depending on what the user said, narrow down the range. So the starting range is 0 to 100, 
//divided in half is 50. If the user said the number is > 50, 
//the next range is 51 to 100, and so on, until the user chooses == N.
//did a bit of it, I don't know how to solve it to the end
// let thisRange= 100;
// while (true){
//     let question =prompt("Is your number >, == or <"+ Math.round(thisRange/2))
//     if (question == "<"){
//         thisRange = Math.round(thisRange/2-1)
//         continue
//     }
//     if (question == ">"){
//         thisRange = Math.round(thisRange + thisRange/2+1)
//         continue
//     }
//     if (question == "=="){
//         alert("Your number is "+ Math.round(thisRange/2))
//         break
//     }
// else{
//     break
// }
// }