(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var mapObject;
var markersArray = [];

$( document ).ready(function() {
  $('#locateUser').click(locateUser);

  $("#showMarkers").click(function() {
    showMarkers();
  });

  $("#clearMarkers").click(function() {
    clearMarkers();
  });
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

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: mapObject
  });
  markersArray.push(marker);
  console.log(markersArray);
}

function setMapOnAll(map) {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function showMarkers() {
  setMapOnAll(mapObject);
}

function geolocationSuccess(position) {
  var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  var myOptions = {
    zoom : 16,
    center : userLatLng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  };

  mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
  mapObject.markers = [];

  new google.maps.Marker({
    map: mapObject,
    position: userLatLng
  });

  mapObject.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });

}

function geolocationError(positionError) {
  alert(positionError);
}

},{}]},{},[1]);
