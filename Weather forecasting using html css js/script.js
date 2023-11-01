async function fetchWeather() {
	const url =
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dehradun";
	const options = {
	  method: "GET",
	  headers: {
		"X-RapidAPI-Key": "a177d30294msh274854f10058fc5p1a26b5jsn1fd349c36a24",
		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	  },
	};
  
	async function getWeather(city) {
	  try {
		const response = await fetch(url + `&city=${city}`, options); // Use the provided city parameter
		const result = await response.json();
		
		
  
		  Current.innerHTML = result.temp;
		  Min.innerHTML = result.min_temp;
		  Max.innerHTML = result.max_temp;
		  Humid.innerHTML = result.humidity;
		  windsp.innerHTML = result.wind_speed;
		  windde.innerHTML = result.wind_degrees;
		
  
		console.log(result);
	  } catch (error) {
		console.error(error);
	  }
	}
  
	const submit = document.getElementById("submit");
	const cityInput = document.getElementById("city");
  
	submit.addEventListener("click", (e) => {
	  e.preventDefault(); // Prevent the default form submission behavior
	  const cityValue = cityInput.value;
	  getWeather(cityValue);
	  CityName.innerHTML=cityValue;
	});
  }
  
  fetchWeather();
  