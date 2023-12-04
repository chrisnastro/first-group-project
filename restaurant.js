var userLocationInput = document.getElementById("location-input");
// var userFoodType = document.getElementById("foodtype-input");
var searchButton = document.getElementById("search-button");
var resultsContainerEl = document.getElementById("results-container");

// searchButton.addEventListener("click", function() { 
// 	document.body.style.cursor = "wait"; 

// 	document.getElementById("search-button") 
// 		.style.backgroundColor = "gray"; 

// 	document.getElementById("search-button") 
// 		.style.cursor = "wait"; 
// 	}); 

// function cursorDefault() {
// 	document.body.style.cursor = "auto"; 
// };

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

function refresh() {
	window.parent.location = window.parent.location.href;
}

function getLocationUrl(location) {
	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=' + location;
}

function getSearchUrl(locationId) {
	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=' + locationId;
}

// function getRestaurantUrl(foodType) {
// 	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=establishmentTypeAndCuisineTags' + foodType;
// }
// console.log(foodType);


function displayRestaurantInfo(data) {
	console.log(data);
	resultsContainerEl.innerHTML = '';
	// orderListEl = document.createElement("ol");
	for (let i = 0; i < 10; i++) {

		var card = document.createElement("div");
		card.classList.add("card");
		var cardBody = document.createElement("div");
		cardBody.classList.add("card-body");
		var cardTitle = document.createElement("h5");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = data[i].name;
		var cardText = document.createElement("p");
		cardText.classList.add("card-text");
		cardText.textContent = data[i].establishmentTypeAndCuisineTags;
		var cardRating = document.createElement("p");
		cardRating.classList.add("card-text");
		cardRating.textContent = "Rating: " + data[i].averageRating;
		var img = document.createElement("img");
		img.classList.add("card-img");
		img.setAttribute("src", data[i].thumbnail.photo.photoSizes[2].url);
	
		console.log(data[i].thumbnail.photo.photoSizes[2].url);


		cardBody.append(cardTitle, cardText, cardRating, img);

		card.append(cardBody)
		resultsContainerEl.appendChild(card);
// cursorDefault();
	}

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

		.then(function (data) { displayRestaurantInfo(data.data.data) })
	//	.catch(error)

};




// function renderFoodType(foodType) {
// fetch(getRestaurantUrl(foodType), restaurantOptions)
// .then(function (response) {
// 	return response.json();
// })
// .then(function (data) {
// 	return fetch(getSearchUrl(data.data[0].establishmentTypeAndCuisineTags), searchOptions)
// })
// .then(function (data) {
// 	return response.json();
// })
// .then(function (data) {console.log(data)})
// };


// const restaurantUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=Restaurant_Review-g60763-d11918545-Reviews-Boucherie_West_Village-New_York_City_New_York';
const restaurantOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	var location = userLocationInput.value;
	// var foodType = userFoodType.value;

	console.log("location: ", location)
	// console.log("food-type: ", foodType)
	console.log("location datatype: ", typeof location)

	localStorage.setItem("location-input", location);
	// localStorage.setItem("foodtype-input", foodType);
	// renderFoodType(foodType);
	renderLocation(location);

})

// fetch (searchUrl, searchOptions).then((response) => response.json()).then((data) => console.log(data));
// fetch (url, options).then((response) => response.json()).then((data) => console.log(data));
// fetch (locationUrl, locationOptions).then((response) => response.json()).then((data) => console.log(data));