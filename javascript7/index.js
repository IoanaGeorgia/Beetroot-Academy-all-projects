// Create an html page with streetlights and a button that switches the color to the next one
let red =document.getElementById("container_red")
let orange=document.getElementById("container_orange")
let green =document.getElementById("container_green")
let button=document.getElementById("color_button")
let colorList=["red", "orange", "green"]
let colorList2 =["green", "red", "orange"]
let colorList3 = ["orange", "green", "red"]

button.onclick=function(){
    color = colorList.shift();
    colorList.push(color);    
    red.style.backgroundColor=color
    color2 =colorList2.shift();
    colorList2.push(color2)
    orange.style.backgroundColor = color2
    color3=colorList3.shift();
    colorList3.push(color3);
    green.style.backgroundColor =color3
}
