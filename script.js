// var resultsContainerTwo = document.getElementById("results-containerTwo");
var mainResults = document.getElementById("main-results");

// const restOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
// 		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// 	}
// };

// function getRestaurantUrl(restaurantsId) {
// 	return 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails?restaurantsId=' + restaurantsId;
// }


function displayRestaurantDetails(restaurantsId) {
	mainResults.innerHTML = '';
	window.open("./details.html");
	console.log(restaurantsId);

	fetch(getRestaurantUrl(restaurantsId), restOptions).then(function (response) {
		return response.json();
	})
		.then(function (data) {
			console.log(data)
			var card = document.createElement("div");
			card.classList.add("card");
			var cardBody = document.createElement("div");
			cardBody.classList.add("card-body");
			var cardAddress = document.createElement("p");
			cardAddress.classList.add("card-text");
			cardAddress.textContent = data.data.location.address;
			console.log(data.data.location.address);
			// h4El.setAttribute("style", "zIndex: 1");

		})

	cardBody.append(cardAddress);
	card.append(cardBody);
	mainResults.appendChild(card);
};