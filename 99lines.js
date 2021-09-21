document.addEventListener("DOMContentLoaded", function(){


let button = document.createElement("button")
let btnText = document.createTextNode("Sing!")

button.appendChild(btnText)
button.className = 'singbtn'
document.body.appendChild(button)

})