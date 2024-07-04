//*************************************************************************************************
//░█████╗░░█████╗░██╗░░░░░░█████╗░██████╗░  ███████╗██╗░░░░░██╗██████╗░██████╗░███████╗██████╗░
//██╔══██╗██╔══██╗██║░░░░░██╔══██╗██╔══██╗  ██╔════╝██║░░░░░██║██╔══██╗██╔══██╗██╔════╝██╔══██╗
//██║░░╚═╝██║░░██║██║░░░░░██║░░██║██████╔╝  █████╗░░██║░░░░░██║██████╔╝██████╔╝█████╗░░██████╔╝
//██║░░██╗██║░░██║██║░░░░░██║░░██║██╔══██╗  ██╔══╝░░██║░░░░░██║██╔═══╝░██╔═══╝░██╔══╝░░██╔══██╗
//╚█████╔╝╚█████╔╝███████╗╚█████╔╝██║░░██║  ██║░░░░░███████╗██║██║░░░░░██║░░░░░███████╗██║░░██║
//░╚════╝░░╚════╝░╚══════╝░╚════╝░╚═╝░░╚═╝  ╚═╝░░░░░╚══════╝╚═╝╚═╝░░░░░╚═╝░░░░░╚══════╝╚═╝░░╚═╝
//*************************************************************************************************
// Custom cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

// Function to check if an element has a black background
function isBGBlack(element) {
  const computedStyle = getComputedStyle(element);
  return computedStyle.backgroundColor === 'rgb(0, 0, 0)';
}

// Move custom cursor and change color if background is black
window.addEventListener('mousemove', function(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 400, fill: "forwards" });

  // Change cursor color if the background is black
  if (isBGBlack(backgrnd)) {
    cursorDot.style.background = 'white';
    cursorOutline.style.borderColor = 'white';
  } else {
    cursorDot.style.background = 'black';
    cursorOutline.style.borderColor = 'black';
  }
});

// Element selectors
let backgrnd = document.querySelector('.app');
let changeColor = document.getElementById('change-color');
let randomColor = document.getElementById('random-color');

const hexColors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1",
  "#FFAA33", "#AAFF33", "#33AAFF", "#FF33AA", "#AA33FF", "#33FFAA",
  "#FF7733", "#33FF77", "#7733FF", "#FF3377", "#7733AA", "#3377FF",
  "#77FF33", "#3377AA", "#AAFF77", "#77AAFF", "#FF77AA", "#AA77FF",
  "#77FFAA", "#FFAA77", "#AAFFAA", "#77AAFF", "#FFAACC", "#AA77AA",
  "#77FFCC", "#FF77CC", "#CC77FF", "#77CCFF", "#CCFF77", "#77FF77",
  "#FF77FF", "#77CCAA", "#AACC77", "#CCAA77", "#77AACC", "#CC77AA",
  "#AACCFF", "#FFCCAA", "#AAFFCC", "#77FFCC", "#FFAAFF", "#CCFFAA",
  "#AACCAA", "#77AACC", "#AACCFF", "#77CCFF", "#CCFF77", "#FFCC77",
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFA1"
];

// Function to validate HEX color
function isValidHEX(hex) {
  const hexRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexRegex.test(hex);
}

// Function to flip color based on input HEX value
function flipColor() {
  let input = document.getElementById('hexinput').value;
  
  if (isValidHEX(input)) {
    let colorHEX = input;
    backgrnd.style.background = colorHEX;
  } else {
    alert("Please enter a valid HEX value");
  }
}

// Function to get a random index
function getRandomIndex() {
  return Math.floor(Math.random() * hexColors.length);
}

// Function to flip color to a random HEX value
function flipRandomColor() {
  let index = getRandomIndex();
  let color = hexColors[index];
  backgrnd.style.background = color;
}

// Event listeners
randomColor.addEventListener('click', flipRandomColor);
changeColor.addEventListener('click', flipColor);

