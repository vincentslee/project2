var userlocation = require("./geolocator");
console.log("location for map api" +userlocation);

const apikey = 'AIzaSyAlmjkWFX6IotUYg3LV2IxwrQxjQvMMRYU';

//Temporary array containing test locations
var locationArray = [
    {
        name: "test",
        lat: -25.344,
        lng: 131.036
    },
    {
        name: "test2",
        lat: -30.,
        lng: 140.
    }
]

// Initialize and add the map
function initMap() {

    // The location of Uluru, for test purposes
    var uluru = {lat: -25.344, lng: 131.036};
    
    //Creates map
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: locationArray[0]});

    // Adds marker positioned at Uluru (for test purposes)
    //var marker = new google.maps.Marker({position: locationArray[0], map: map});

    //Test function which places markers for every item in array
    locationArray.forEach(location=> new google.maps.Marker({position: location, map: map}));
    

}