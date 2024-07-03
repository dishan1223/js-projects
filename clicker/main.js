let clickZone = document.querySelector('.click-zone');
let clickCount = document.querySelector('.click-count');
let initialCount = 0;
clickZone.addEventListener('click', function(){
  // increase counter value by 1
  let count = initialCount++;
  clickCount.textContent = count;
})
