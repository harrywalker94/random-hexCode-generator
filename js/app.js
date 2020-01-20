const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Hex color codes uses numbers between 0-9 and letters between A-F
const colorBtn = document.querySelector(".colorBtn"); // To access the color Button
const bodyBg = document.querySelector("body"); // To access the body element
const hexColorCode = document.querySelector(".hexColorCode"); // To Access the hexColorCode class

// Create click event listener
colorBtn.addEventListener("click", getHex);

function getHex() {
  let hexColor = "#"; /* Create a variable to hold hex colors */
  // Generate 6 random numbers or letters from the hexNumbers variable using a forLoop.
  for (let i = 0; i < 6; i++) {
    // Create a variable for generating random numbers/letters which is less than the hexNumbers length.
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexColor += hexNumbers[random]; // Add a random hex number to the hexColor variable
  }
  bodyBg.style.backgroundColor = hexColor;
  hexColorCode.innerHTML = hexColor;
}
