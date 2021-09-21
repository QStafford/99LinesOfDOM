document.addEventListener("DOMContentLoaded", function () {

    let friends = ['Jerry', 'Kevin', 'Diego', 'Alex', 'Emma']
    let button = document.createElement("button")
    let btnText = document.createTextNode("Sing!")

    button.appendChild(btnText)
    button.className = 'singbtn'
    document.body.appendChild(button)

    button.addEventListener("click", function(){
        
    })

})