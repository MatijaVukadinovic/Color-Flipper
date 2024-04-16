//Array of hexadecimal values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Declaration of color, button and span reference
let color = document.querySelector(".color");
let button = document.getElementById("btn");
let colorSpan = document.querySelector(".color");

//Declaration of random number generator function
function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
};

//Declaration of random hex creation function
function createRandomHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    colorSpan.style.color = hexColor;
};

//Connection of function with button
button.addEventListener("click", createRandomHex);
