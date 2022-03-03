apiKey = `3d4e76c2c23e9c0a3afc624e00b10961`;
const searchTEmparature = () => {
  const city = document.getElementById("city-name").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  /*   console.log(url); */
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTempareture(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTempareture = (data) => {
  setInnerText("city", data.name);
  setInnerText("temp", data.main.temp);
  setInnerText("weather", data.weather[0].description);
  const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let weatherIcon = document
    .getElementById("weather-icon")
    .setAttribute("src", url);
};
