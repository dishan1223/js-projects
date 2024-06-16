const apiUrl = 'https://narutodb.xyz/api/character/search?name=naruto%20uzumaki';
const charImg = document.querySelector(".char");

async function searchNarutoDB()
{
  charImg.src = 'images/default-img.jpg'
  const response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);
  document.querySelector('.name').textContent = data.name;
  document.querySelector('.clan').innerHTML ='Clan Name: '+ data.personal.clan;
}


searchNarutoDB();

