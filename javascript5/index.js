// 1. Create an object that describes a car (manufacturer, model, year of release, 
//     average speed) and the following methods for working with this object:

//     A method that displays the car info 
//     A method for counting a time frame necessary to cover a given distance with 
//     the average speed. Note that every 4 hours the driver has to take a 1-hour break.

// const prettyCar={
//     manufacturer:"Toyota",
//     model:"Newest model",
//     year_of_release: 2016,
//     avg_speed: 3500,
//     allInfo:function(){
//         console.log(this.manufacturer + "\n" + this.model +"\n" + this.year_of_release+"\n"+this.avg_speed);
//     },
//     countMe: function(distance){
//         distance =prompt("Enter distance:")
//         time_first =distance/this.avg_speed
//         time_second =time_first/4
//         time_final =time_first+ time_second
//         console.log(time_final)

//     }
// }
// prettyCar.allInfo()
// prettyCar.countMe()

// 2. Create an object that contains separately the numerator and the denominator of 
// a fraction, and the following functions for working with this object:

//     A function for adding two fraction objects.
//     A function for subtracting two fraction objects.
//     A function for multiplying two fraction objects.
//     A function for dividing two fraction objects.
//     A function for simplifying a fraction object. 

// const fraction ={
//     numerator:90,
//     denominator: 30,
//     simplify: function(){  
//         for (let i =1; i<=Math.max(this.numerator,this.denominator);i++){
//             if(this.numerator%i ==0 && this.denominator%i ==0){
//                 this.numerator=this.numerator/i
//                 this.denominator=this.denominator/i
//             }
//         }
//         console.log(this.numerator + "\n" + this.denominator)
        
//     }
// }
// fraction.simplify()
                            //instructions not clear
                            //if the object has only one fraction, what other fraction should I work with?
                             //should I prompt for another fraction? Should there be multiple fractions in this object?


// 3. Create an object that describes time (hours, minutes, seconds), and the 
// following methods for working with this object: 

//     A method for displaying the time. 
//     A method for changing the time by a given amount of seconds. 
//     A method for changing the time by a given amount of minutes.  
//     A method for changing the time by a given amount of hours. 

// Note that in the last three methods changing one part may influence another. For example,
//  if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».
const time ={
    hours: 00,
    minutes:01,
    seconds:03,
    display: function(){
        console.log("hours:", this.hours, "\n", "minutes:", this.minutes,"\n", "seconds:", this.seconds)
    },
    addSec:function(sec){
        sec =prompt("Enter nr of seconds")
        if (sec%60 >=0 && sec<3600){
            this.minutes= this.minutes+ sec/60
            this.seconds=this.seconds+sec
        }
        if(sec>=3600){
            this.hours=this.hours+sec/3600
            this.minutes =this.minutes + sec-(this.hours*60)
            this.seconds=this.seconds+ sec-(this.minutes*60)
        }
    console.log("hours:", this.hours, "\n", "minutes:", this.minutes,"\n", "seconds:", this.seconds)
    
    } //still working on it, it has some bugs
}
time.addSec(3600)
