var userLocationInput = document.getElementById("location-input");
var searchButton = document.getElementById("search-button");
var resultsContainerEl = document.getElementById("results-container");
var modal = document.getElementById('modal');
var mainResults = document.getElementById("main-results");

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

const restOptions = {
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

function getRestaurantUrl(restaurantsId) {
	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=' + restaurantsId;
}

function displayRestaurantDetails(restaurantsId) {

	var restTitle = document.getElementById("resttitle");
	var restAddress = document.getElementById("restaddress");
	var restEmail = document.getElementById("restemail");
	var restPhone = document.getElementById("restphone");
	var loader = document.getElementById("loader");
 
	restTitle.textContent = "";
	restAddress.textContent = "";
	restEmail.textContent = "";
	restPhone.textContent = "";
	
	fetch(getRestaurantUrl(restaurantsId), restOptions).then(function (response) {
		return response.json();
	})
		.then(function (data) {
			console.log(data)

			restTitle.textContent = data.data.location.name;
			restAddress.textContent = "Address: " + data.data.location.address;
			restEmail.textContent = "Email: " + data.data.overview.contact.email;
			restPhone.textContent = "Phone: " + data.data.overview.contact.phone;
			loader.style.display = 'none';
		})
};

function displayCityRestaurants(data) {
	console.log(data);

	resultsContainerEl.innerHTML = '';
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
		var moreButton = document.createElement("button");
		moreButton.type = "button";
		moreButton.classList.add("more-button");
		moreButton.setAttribute("data-bs-toggle", "modal");
		moreButton.setAttribute("data-bs-target", "#restinfo");
		moreButton.textContent = "More Info"
		moreButton.addEventListener("click", function (event) {
			event.preventDefault();
			displayRestaurantDetails(data[i].restaurantsId)
		})
		var img = document.createElement("img");
		img.classList.add("card-img");
		img.setAttribute("src", data[i].thumbnail.photo.photoSizes[2].url);

		cardBody.append(cardTitle, cardText, cardRating, img, moreButton);
		card.append(cardBody)
		resultsContainerEl.appendChild(card);
	}

};

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

		.then(function (data) { displayCityRestaurants(data.data.data) })

};

searchButton.addEventListener("click", function (event) {
	event.preventDefault();
	var location = userLocationInput.value;

	console.log("location: ", location)

	console.log("location datatype: ", typeof location)

	localStorage.setItem("location-input", location);

	renderLocation(location);

});