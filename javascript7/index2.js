// Create an html page with OPEN button and a modal box. 
// The modal box should have text and a CLOSE button. 
// The modal box is not displayed from the beginning.
//  It appears when clicking the OPEN button and disappears when clicking CLOSE.

let openBttn =document.getElementById("open-button");
let modal =document.getElementById("modal");
let closeBttn =document.getElementById("closing-button");

openBttn.onclick=function(){
    modal.style.display="block";
    document.body.style.backgroundColor="#202121";
}
closeBttn.onclick=function(){
    modal.style.display ="none";
    document.body.style.backgroundColor="black";
}
