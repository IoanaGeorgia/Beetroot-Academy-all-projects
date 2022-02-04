
    // Request a three-digit number from a user and check whether it has identical digits in it.
    let yourNumber =prompt("Write here your 3-digit number")
    if (yourNumber.length == 3){
        for (let x=0; x <= yourNumber.length ;x++ ){
            if(yourNumber[x] != yourNumber[0]){
                console.log("No identical digits")
            }else{
                console.log("Identical digits")
            }
        }
    }else console.log("Your number doesn't have 3 digits")

    // Request a five-unit number from a user and check whether it is a palindrome.
    let yourNumber=prompt("Tell me your 5 digit number")
    if (yourNumber.length==5){
        if(yourNumber == yourNumber.split('').reverse().join('')){
            console.log("it'sa palindromeeee")
        }else{console.log("no palindrome here! ;/")}

    }
    else{
        console.log("Your number doesn't have 5 digits")
    }

    // Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
    let USD=prompt("Enter your USD sum here")
    let currency =prompt("Pick between EUR and SEK")
    if (currency == "EUR"){
        alert(USD*0.88)
    } else if (currency == "SEK"){
        alert(USD*9.08)
    } else {alert("Wrong currency Sir")}

    // Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
    //I used yyyy for the year because the user could have input any year from any time
    let yourDate=prompt("Enter a date (dd:mm:yyyy)")
    year=yourDate.substring(6, 10);
    console.log("this is the year " ,year);
    month=yourDate.substring(3, 5)
    console.log("This is the month ", month)
    day=yourDate.substring(0, 2);
    console.log("this is the day ", day)
    let convertedDate = new Date();
    convertedDate.setFullYear(year, month-1, day);
    convertedDate.setDate(convertedDate.getDate()+1);
    alert(convertedDate)

