var apiKey = require('./../.env').apiKey;
var Map = require('./../js/maps.js').mapModule;

$(function() {
  debugger;
  $(".map").html('<iframe width="600" height="450" frameborder="0" src="https://www.google.com/maps/embed/v1/place?key=' + apiKey + '&q=Space+Needle,Seattle+WA" allowfullscreen></iframe>');
})
