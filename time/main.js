function ResizeClockFont(){
  let screenWidth = window.innerWidth; // Use window.innerWidth for dynamic resizing
  let fontSize =  (screenWidth * 260) / 1825;
  let timeFont = document.querySelector('.time');
  if (timeFont) { // Check if the element exists
    timeFont.style.fontSize = fontSize + 'px';
  }
}

window.onload = ResizeClockFont;
window.onresize = ResizeClockFont; // Adjust font size on window resize

