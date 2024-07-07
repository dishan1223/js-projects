const button = document.getElementById('btn');

function showNav() {
  const menu = document.querySelector('.menu');
  const sections = document.querySelector('.sections');

  if (menu.style.height === '0px' || menu.style.height === '') {
    console.log("gotcha!");
    menu.style.height = '300px'; // Expand to full height
    sections.style.opacity = '1'; // Set opacity to 1
  } else {
    menu.style.height = '0px'; // Collapse height
    sections.style.opacity = '0'; // Set opacity to 0
  }
}

button.addEventListener('click', showNav);

