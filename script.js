//Array of hexadecimal values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

//Declaration of color and button reference
let color = document.querySelector(".color")
let button = document.getElementById("btn");

//Declaration of random number generator function
function generateRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


function createRandomHex() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
