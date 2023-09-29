let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));
let num3 = parseInt(prompt("Enter number 3"));


let max = Math.max(num1, num2, num3);
let min = Math.min(num1, num2, num3);

document.querySelector("#max").value = max;
document.querySelector("#min").value = min;

