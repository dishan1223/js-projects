const apiKey = 'Api Key';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

async function checkWeather()
{
  const response = await fetch(apiUrl + `&q=dhaka`  + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
}

checkWeather();
