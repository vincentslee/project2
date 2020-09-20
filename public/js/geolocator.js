var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
function success(pos) {
    return pos;

}

function error(err) {
console.warn(`ERROR(${err.code}): ${err.message}`);
}

module.exports = navigator.geolocation.getCurrentPosition(success, error, options);

