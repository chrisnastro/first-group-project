const locationUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=new-york';
const locationOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
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



fetch (searchUrl, searchOptions).then((response) => response.json()).then((data) => console.log(data));
fetch (url, options).then((response) => response.json()).then((data) => console.log(data));
fetch (locationUrl, locationOptions).then((response) => response.json()).then((data) => console.log(data));