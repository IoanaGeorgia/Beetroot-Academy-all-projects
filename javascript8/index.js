// 1.Create an html-page for displaying and editing text. When opening the page, 
// the text should be displayed with div tag. When clicking Ctrl+E, textarea appears
//  instead of div and can be edited. When pressing Ctrl+S, the div with edited text appears instead of
//  textarea. Don’t forget to turn off default settings for these hotkey combinations.
thatDiv =document.getElementById("editing-div");
thatTextarea=document.getElementById("editing-textarea");
let insideValue=document.getElementById("editing-textarea").value

document.addEventListener("keydown",function(event){
    if (event.key == "e" && event.ctrlKey){
        event.preventDefault();
        thatDiv.style.display= "none";
        thatTextarea.style.display="block"
    }
    if (event.key =="s" && event.ctrlKey){
        event.preventDefault();
        thatTextarea.style.display ="none";
        thatDiv.innerHTML=insideValue;
        thatDiv.style.display= "block";
    }
}
)
