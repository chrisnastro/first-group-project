var userLocationInput = document.getElementById("location-input");
var userFoodType = document.getElementById("foodtype-input");
var searchButton = document.getElementById("search-button");

const locationOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

const searchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

function getLocationUrl(location) {
return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=' + location;
}

function getSearchUrl(locationId) {
	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=' + locationId;
}

function renderLocation(location) {

fetch(getLocationUrl(location), locationOptions)
.then(function (response) {
	return response.json();
})
.then(function (data) {
	 return fetch(getSearchUrl(data.data[0].locationId), searchOptions)
})
.then(function (response) {
	return response.json();
})
.then(function(data){console.log(data)}) 
};


const restaurantUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=Restaurant_Review-g60763-d11918545-Reviews-Boucherie_West_Village-New_York_City_New_York';
const restaurantOptions = {
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
	renderLocation(location);
})

// fetch (searchUrl, searchOptions).then((response) => response.json()).then((data) => console.log(data));
// fetch (url, options).then((response) => response.json()).then((data) => console.log(data));
// fetch (locationUrl, locationOptions).then((response) => response.json()).then((data) => console.log(data));