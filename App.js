const area=document.querySelector('.location-timezone');
const icon=document.querySelector('.icon');
const temprature=document.querySelector('.temprature-degree');
const description=document.querySelector('.temprature-description');

const search=document.querySelector('.search__input');

window.addEventListener('load',()=>{
	let long;
	let lat;
	let loc;

		search.addEventListener('submit',(e) => {
					e.preventDefault();
			        loc=search.value;
				});

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position=>{
			long=position.coords.longitude;
			lat=position.coords.latitude;


			const proxy="https://cors-anywhere.herokuapp.com/";
			const api=`${proxy}http://api.weatherstack.com/current?access_key=0eb4f5aca782c82fbf81e9c0a8140b50& query=${loc}`;
			fetch(api)
			.then(response=>{
				return response.json();
			})
			.then(data=>{
			
			
			console.log(data);
			area.innerHTML=data.request.query;
			const {temperature}=data.current;
			// var icon1=data.current.weather_icons;
			icon.src= data.current.weather_icons;
			description.textContent=data.current.weather_descriptions;
			temprature.textContent=temperature;
			
			// setIcons(icon1,document.querySelector(.icon))
			});
		});
	}

	// function setIcons(icon1,iconID){
	// 	const skycons=new Skycons({color:pink});
	// 	if(icon1.includes("https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0006_mist.png")
	// 	const currentIcon=icon.re
	// skycons.play();
	// return skycons.set(iconID,Skycons[currentIcon]);
	// }
});