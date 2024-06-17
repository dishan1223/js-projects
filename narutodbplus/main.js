const apiUrl = 'https://narutodb.xyz/api/character/search?name=';
const charImg = document.querySelector(".shinobi-img");
const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.btn');

async function searchNarutoDB(charName)
{

  const response = await fetch(apiUrl + charName);
  var data = await response.json();
  console.log(data);
  
  let totalImgs = data.images.length;
  console.log(totalImgs)

  charImg.src = `${data.images[totalImgs-1]}`;
  document.querySelector(".name").textContent = "Name: " + data.name;
  document.querySelector('.id').textContent = 'id: ' + data.id;
  document.querySelector('.b-day').textContent = 'Birth: '+data.personal.birthdate;
  document.querySelector('.classification').textContent = 'Classification: ' + data.personal.classification[0];
  document.querySelector('.blood').textContent = 'Blood: ' + data.personal.bloodType;
  
}

searchBtn.addEventListener('click', ()=>{
  searchNarutoDB(inputBox.value);
});

