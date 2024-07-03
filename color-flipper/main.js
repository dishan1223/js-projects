let backgrnd = document.querySelector('.app');
let changeColor = document.getElementById('change-color');


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



changeColor.addEventListener('click', flipColor);
