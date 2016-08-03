// var apiKey = require('./../.env').apiKey;
// var Map = require('./../js/maps.js').mapModule;

var mapObject;

$( document ).ready(function() {
  $('#locateUser').click(locateUser);
  });

function locateUser() {
  if (navigator.geolocation){
    var positionOptions = {
      enableHighAccuracy: true,
      timeout: 10 * 1000
    };
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
  }
  else {
    alert("Your browser doesn't support the Geolocation API");
  }
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  mapObject.markers = [];

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });
  mapObject.addListener('dblclick', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
    this.markers.push(e.latLng);
    console.log(this.markers);
    console.log(mapObject.markers);
  });

  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
    position: latLng,
    map: mapObject
  });
  mapObject.panTo(latLng);
  }

  function printMarkers() {
        markerArray.forEach(function(coordinate) {
          var marker = new google.maps.Marker({
          position: coordinate
        }, coordinate);
      });
  }

}



function geolocationError(positionError) {
  alert(positionError);
}
