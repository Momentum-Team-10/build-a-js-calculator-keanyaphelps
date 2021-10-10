let buttons = document.querySelectorAll(".number-button")
console.log(buttons)
for (let button of buttons){
    button.addEventListener("click", () => {
        display.innetText += button.innertext
    })
    
}
let equals = document.getElementById('equals')

equals.addEventListener('Click', () => {
    display.innetText = eval(display.innetText)

})