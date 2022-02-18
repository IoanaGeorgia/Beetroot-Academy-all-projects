const button =document.getElementById("submitInput")
button.addEventListener("click", cats)
function cats(str) {
    str = document.getElementById("breedInput").value
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
           txt =JSON.parse(this.responseText)
           if (txt[0]==null){
            document.getElementById("infoBreed").innerHTML = "--no data for this breed"

           }
           document.getElementById("infoBreed").innerHTML = `ID is ${txt[0].id} 
           <br />Name is ${txt[0].name}
           <br />URL is ${txt[0].cfa_url}
           <br /> Life span is ${txt[0].life_span}`;

         }
    };
    xhttp.open("GET", `https://api.thecatapi.com/v1/breeds/search?q=${str}`);
    xhttp.send(); 
}
const favButton =document.getElementById("addFav")
const favBreeds=document.getElementById("favBreeds")
const disApp =document.getElementById("disApp")
favButton.addEventListener("click", favs)
function favs(string){
    string =document.getElementById("breedInput").value
    localStorage.setItem("fav", string)
    const app =localStorage.getItem("fav")
    function getIt(){
        disApp.style.display="none"
        let par =document.createElement("p")
        par.innerHTML=app
        favBreeds.appendChild(par)
    }
    getIt()
}