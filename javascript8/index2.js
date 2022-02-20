// 2.Create an html-page with
//  a large table. When clicking
//   the column heading, it is necessary
//    to sort data of that column. Note 
//    that numerical values should be 
// sorted as numbers, not as strings.
days=document.getElementById("table_days").addEventListener("click", Tablefunct)
thisTable =document.getElementById("thisTable").rows
let thisArray = []
function Tablefunct(){
    for (let i =1; i<(thisTable.length);i++){
        thisArray.push(thisTable[i].cells[0].innerText);
        thisArray.sort()
}
    for(let x =1; x<=(thisTable.length-1);x++){
        thisTable[x].cells[0].innerHTML = thisArray[x-1]
    }
    document.getElementById("table_days").removeEventListener("click", Tablefunct)
}

numbers=document.getElementById("table_numbers").addEventListener("click", Numfunct)
let thatArray = []
function Numfunct(){
    for (let i =1; i<(thisTable.length);i++){
        thatArray.push(thisTable[i].cells[1].innerText);
        thatArray.sort(function(a, b){return a-b})
}
    for(let x =1; x<=(thisTable.length-1);x++){
        thisTable[x].cells[1].innerHTML = thatArray[x-1]
    }
    document.getElementById("table_numbers").removeEventListener("click", Numfunct)
}

colors=document.getElementById("table_colors").addEventListener("click", Colorfunct)
let thatOtherArray = []
function Colorfunct(){
    for (let i =1; i<(thisTable.length);i++){
        thatOtherArray.push(thisTable[i].cells[2].innerText);
        thatOtherArray.sort()
}
    for(let x =1; x<=(thisTable.length-1);x++){
        thisTable[x].cells[2].innerHTML = thatOtherArray[x-1]
    }
    document.getElementById("table_colors").removeEventListener("click", Colorfunct)
}


