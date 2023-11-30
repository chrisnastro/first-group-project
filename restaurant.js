var userLocationInput = document.getElementById("location-input");
var userFoodType = document.getElementById("foodtype-input");
var searchButton = document.getElementById("search-button");





function renderLocation() {
	var location = localStorage.getItem("location-input");


var locationUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=' + location;
const locationOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};
console.log(location);
console.log(locationUrl);

fetch(locationUrl, locationOptions)
.then(function (response) {
	return response.json();
})
.then(function (data) {
	for (var i = 0; i < 1; i++) {
		console.log(data.data[i].locationId);
	}
});
fetch (locationUrl, locationOptions).then((response) => response.json()).then((data) => console.log(data));
};



const searchUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=60763';
const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=Restaurant_Review-g60763-d11918545-Reviews-Boucherie_West_Village-New_York_City_New_York';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

searchButton.addEventListener("click", function(event) {
	event.preventDefault();

	var location = userLocationInput.value;
	var foodType = userFoodType.value;

	localStorage.setItem("location-input", location);
	localStorage.setItem("foodtype-input", foodType);
	renderLocation();
})

fetch (searchUrl, searchOptions).then((response) => response.json()).then((data) => console.log(data));
fetch (url, options).then((response) => response.json()).then((data) => console.log(data));
// fetch (locationUrl, locationOptions).then((response) => response.json()).then((data) => console.log(data));