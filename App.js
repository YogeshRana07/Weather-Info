//DOM ELEMENTS AND VARIABLES
const area = document.querySelector(".location-timezone");
const icon = document.querySelector(".icon");
const temprature = document.querySelector(".temprature-degree");
const description = document.querySelector(".temprature-description");
const btn = document.querySelector(".button");
let loc = "Yamunanagar";
const search = document.querySelector(".search__input");
const unit=document.querySelector('.degree-section span');
const degree=document.querySelector('.degree-section');
//API FETCHING
const handleData = () => {
  let long;
  let lat;
  

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `http://api.weatherstack.com/current?access_key=0eb4f5aca782c82fbf81e9c0a8140b50&query=${loc}`;
      fetch(api).then((response) => {
        response.json().then((data) => {
          console.log(data);
          const { temperature } = data.current;
          if(loc===data.location.name){
          area.innerText = data.request.query;
          icon.setAttribute("src", `${data.current.weather_icons[0]}`);
          description.textContent = data.current.weather_descriptions;
          temprature.textContent = temperature;

          var celcius=temperature;
          
          var farenheit=(temperature*9/5)+32;
        
          degree.addEventListener('click',(e) => {
            e.preventDefault();
           if(unit.textContent==='C')
            {
     
              unit.textContent='F';
               temprature.textContent=Math.floor(farenheit);

            }
            else{
               unit.textContent='C';
               temprature.textContent=temperature;
              }
});

}
          else{
          	alert('Enter the Proper Location and First letter in upperccase 😊😊😊');
          }

        });
      });
    });
  }
};


//EVENT LISTENERS
window.addEventListener("load", handleData);
btn.addEventListener("click", (e) => {
  e.preventDefault();
  loc = search.value;
  handleData();
});

