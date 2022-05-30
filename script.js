var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var h3 = document.querySelector("h3")
var body = document.querySelector("#body")

function changeColor(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

function displayColor(){
    h3.innerHTML = ""
    var color = body.style.background;
    h3.textContent = color + ";";
}

color1.addEventListener("input", changeColor)
color1.addEventListener("input", displayColor)

color2.addEventListener("input", changeColor)
color2.addEventListener("input", displayColor)