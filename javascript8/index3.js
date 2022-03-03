// 3.Create an html-page with a text block in a frame.
//  Execute the possibility to change the size of the 
//  block when holding the mouse cursor
//  in the bottom right corner and pull it further.

frame = document.getElementById("thisFrame")
frame.addEventListener('mousedown', startChange, false);
function startChange() {
   window.addEventListener('mousemove', Change, false);
   window.addEventListener('mouseup', NoChange, false);
}
function Change(event) {
   frame.style.width = (event.clientX - frame.offsetLeft) + 'px';
   frame.style.height = (event.clientY - frame.offsetTop) + 'px';
}
function NoChange() {
    window.removeEventListener('mousemove', Change, false);
    window.removeEventListener('mouseup', NoChange, false);
} //I don't really know how to do this one to be honest :(((