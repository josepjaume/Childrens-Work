window.addEventListener("domready", geolocation, false);

var search = document.getElementById('geolocation-search');
var getMap = document.getElementById('map');

search.addEventListener('click', getGeolocation, false);

function getGeolocation(){
	if(navigator.geolocation) {
		 navigator.geolocation.getCurrentPosition(geolocation, handlingErrors);
  } else {
		alert('Your browser does not support geolocator');
	  }
}

function geolocation(position){
var latitud = position.coords.latitude;
var longitud = position.coords.longitude;
var map = 'http://maps.google.com/maps/api/staticmap?center=' + latitud + ',' + longitud + '&zoom=15&size=300x200&markers=color:blue|label:A|' + latitud + ',' + longitud + '&sensor=false';
  getMap.innerHTML = "<img src='"+ map +"' />" ;
}

function handlingErrors (err) {

if (err.code == 0) {
	alert('You need authorize geolocation in your browser');
}

else if (err.code == 1) {
	alert('Your position is not available');
}

else if (err.code == 2) {
	alert('Your browser has blocked the geolocation');
}
}
