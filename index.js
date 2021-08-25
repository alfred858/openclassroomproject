let num1 = 8
let num2 = 2
document.getElementById("num1 - el").textContent = Num1
document.getElementById("num2 - el").textContent = Num2

// Create four functions: add(), subtract(), divide(), multiply()
let sumEl = document.getElementById("sum-el")

function add() {
    let add = num1 + num2
    sumEl.textContent = num1 + num2
}

function subtract() {
    let subtract = num1 - num2
    sumEl.textContent = num1 - num2

}

function divide() {
    let divide = num1 / num2
    sumEl.textContent = num1 / num2

}

function multiply() {
    let multiply = num1 * num2
    sumEl.textContent = num1 * num2

}
