let backgrnd = document.querySelector('.app');

let changeColor = document.getElementById('change-color');

function flipColor(){
  let input = document.getElementById('hexinput').value;
  let colorHEX = input;
  backgrnd.style.background = colorHEX; 
}



changeColor.addEventListener('click', flipColor);
