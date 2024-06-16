const apiUrl = 'https://narutodb.xyz/api/character/search?name=';
const charImg = document.querySelector(".char");
const inputBox = document.getElementById('input-box');
const btn = document.getElementById("search-btn");

async function searchNarutoDB(charName)
{

  const response = await fetch(apiUrl + charName);
  var data = await response.json();
  console.log(data);
  document.querySelector('.name').textContent = data.name;
  document.querySelector('.clan').innerHTML ='Clan Name: '+ data.personal.clan;
  charImg.src = `${data.images[0]}`;
  document.querySelector('.jutsu').innerHTML = 'Main Jutsu: ' + data.jutsu[0];
  document.querySelector('.nature').innerHTML = 'Nature: ' + data.natureType[0];

}

btn.addEventListener('click',() => {
  searchNarutoDB(inputBox.value);
})


