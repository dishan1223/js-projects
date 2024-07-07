const display = document.getElementById('display');

function appendToDisplay(char){
  display.value += char;
}


function clearDisplay(){
  display.value = '';
}
