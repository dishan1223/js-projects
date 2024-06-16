const apiKey = 'Your Api key';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('search');

async function checkWeather(city)
{
  const response = await fetch(apiUrl + `&q=${city}`  + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector('.location').textContent = data.name;
  document.querySelector('.temperature').textContent = Math.floor(data.main.temp)+'°C';
  document.querySelector('.wind').textContent = data.wind.speed + " km/h";
  document.querySelector('.humidity').textContent = data.main.humidity + "%";
}

searchBtn.addEventListener('click', () => {
  checkWeather(inputBox.value);
})

