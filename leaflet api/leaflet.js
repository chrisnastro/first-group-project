//  Map creation with functionality
var map = L.map("map").setView([40.7128, -74.0060], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Blue marker pinning to location
var marker = L.marker([40.7330, -74.0028]).addTo(map);
marker.bindPopup("<b>Restaurant 1</b>");

var marker = L.marker([40.7330, -74.0040]).addTo(map);
marker.bindPopup("<b>Restaurant 2</b>");

// var marker = L.marker([40.3330, -74.0040]).addTo(map);
// marker.bindPopup("<b>Restaurant 2</b>");

// var marker = L.marker([40.3330, -74.0040]).addTo(map);
// marker.bindPopup("<b>Restaurant 2</b>");

// var marker = L.marker([40.5330, -74.0040]).addTo(map);
// marker.bindPopup("<b>Restaurant 2</b>");

// Stand alone pop-up
// var popup = L.popup()
//   .setLatLng([51.513, -0.09])
//   .setContent("I am a standalone popup.")
//   .openOn(map);
//   function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

map.on('click', onMapClick);


// Pop-up on map click
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
