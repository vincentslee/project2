var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

//Function upon succes
function success(pos) {
    return pos;

}

//Function upon failure
function error(err) {
console.warn(`ERROR(${err.code}): ${err.message}`);
}

//Prompts geolocator
var userlocation = navigator.geolocation.getCurrentPosition(success, error, options);

module.exports = userlocation;

