const button = document.getElementById('btn');

function showNav() {
  const menu = document.querySelector('.menu');
  const sections = document.querySelector('.sections');

  if (menu.style.display === 'none' || menu.style.display === '') {
    console.log("gotcha!");
    // Optionally, you can toggle the display property
    menu.style.display = 'block'; // or any other logic you want
    sections.style.display = 'block';
  } else {
    menu.style.display = 'none';
    sections.style.display = 'none';
  }
}

button.addEventListener('click', showNav);

