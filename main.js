let display = document.getElementById("display");
console.log("test");
let buttons = document.querySelectorAll(".number-button");
console.log("test1");
for (let button of buttons) {
    console.log(button);
    button.addEventListener("click", () => {
        console.log(display.innerText);
        display.innerText += button.innerText;
    });

}
let equals = document.getElementById('equals');

equals.addEventListener("click", () => {
    display.innerText = eval(display.innerText);
});
let clear = document.getElementById("bclear");

clear.addEventListener ("click", () => {
    display.innerText = ""
});
