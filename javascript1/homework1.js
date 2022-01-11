
    //Request a user’s name and display the response “Hello, [name]”.
    var userName = prompt("What's your name?");
    console.log("Hello" + " " + userName)
    //Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
    var year= prompt("Tell me your year of birth")
    currentYear=2022
    console.log(currentYear-year)
    //Request a length of a side of a square from a user and display the perimeter of the square. 
    var side =prompt("Tell me the length of the sideeeeee")
    console.log(4*side)
    //Request a radius of a circle and display the area of such a circle. 
    const circle=prompt("Tell me the radius")
    console.log(3.14*circle**2)
    //Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 
    const distance=prompt("Distance here")
    const time=prompt("tell me time")
    console.log(distance/time)
    //Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant
    const USD=prompt("How much money do you have sir?")
    console.log(USD*0.88)
    //A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
    const money=prompt("money here:")
    const chocolatePrice =prompt("chocolate here:")
    console.log(money/chocolatePrice)
    console.log(money%chocolatePrice)


