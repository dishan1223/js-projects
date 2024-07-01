function ResizeClockFont() {
  let screenWidth = window.innerWidth; // Use window.innerWidth for dynamic resizing
  let fontSize = (screenWidth * 260) / 1825;
  let timeFont = document.querySelector('.time');
  if (timeFont) { // Check if the element exists
    timeFont.style.fontSize = fontSize + 'px';
  }
}


function getTime(){
  let time = new Date();
  let hours = String(time.getHours()).padStart(2, '0'); // Pad with zero if necessary
  let min = String(time.getMinutes()).padStart(2, '0'); // Pad with zero if necessary
  let sec = String(time.getSeconds()).padStart(2, '0');
  let currentTime = `${hours}:${min}:${sec}`;
  const timer = document.getElementById('time');
  if(timer){
    timer.textContent = currentTime;
  }
}

window.onload = function(){
  ResizeClockFont();
  getTime();
  setInterval(getTime, 1000);
}

