
// custom cursor 
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', function(e){
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`

  },{duration: 400, fill: "forwards"})

})


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




function isValidHEX(hex){
  const hexRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexRegex.test(hex);
}

function flipColor(){
  let input = document.getElementById('hexinput').value;
  
  if(isValidHEX(input)){
    let colorHEX = input;
    backgrnd.style.background = colorHEX;
  }
  else{
    alert("Please enter a valie hex value")
  }
}

function getRandomIndex(){
  let randomIndex = Math.floor(Math.random() * hexColors.length);
  return randomIndex;
}


function flipRandomColor(){
  let index = getRandomIndex();
  let color = hexColors[index];
  backgrnd.style.background = color;
}

randomColor.addEventListener('click', flipRandomColor);
changeColor.addEventListener('click', flipColor);
