const area = document.querySelector(".location-timezone");
const icon = document.querySelector(".icon");
const temprature = document.querySelector(".temprature-degree");
const description = document.querySelector(".temprature-description");
const btn = document.querySelector(".button");
let loc = "panipat";
const search = document.querySelector(".search__input");
const handleData = () => {
  let long;
  let lat;
  console.log(loc);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `http://api.weatherstack.com/current?access_key=0eb4f5aca782c82fbf81e9c0a8140b50&query=${loc}`;
      console.log(api);
      fetch(api).then((response) => {
        response.json().then((data) => {
          console.log(data);
          const { temperature } = data.current;
          //   console.log();
          area.innerText = data.request.query;
          icon.setAttribute("src", `${data.current.weather_icons[0]}`);
          description.textContent = data.current.weather_descriptions;
          temprature.textContent = temperature;
        });
      });
    });
  }
};

window.addEventListener("load", handleData);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  loc = search.value;
  handleData();
});
