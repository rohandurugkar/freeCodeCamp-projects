$(document).ready(function(){
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) { 
  $.getJSON("https://api.apixu.com/v1/current.json?key=03c4ca97febf4f77afc120158172701&q="+ position.coords.latitude +"," +position.coords.longitude+ "", function(json){
  $("#cityName").html(json.location.name + ", " + json.location.country);
  
  $("#lastUpdated").html(json.current.last_updated);
  $("#temp").html(json.current.temp_c + "&degC");
  $("#description").html(json.current.condition.text);  
  $("#icon").empty();
  $("#icon").append("<img class='center-block' src='https:" + json.current.condition.icon + "' alt='weather icon'>");
  $("#windSpeed").html(json.current.wind_kph + "kph " + json.current.wind_dir);
  $("#humidity").html(json.current.humidity + "%");
  $("#precipitation").html(json.current.precip_mm + "mm")
  $("#feelsLike").html(json.current.feelslike_c + "&degC")
  });
  });
}

  $("#metric").on("click", function(){
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) { 
  $.getJSON("https://api.apixu.com/v1/current.json?key=03c4ca97febf4f77afc120158172701&q="+ position.coords.latitude +"," +position.coords.longitude+ "", function(json){
  $("#cityName").html(json.location.name + ", " + json.location.country);
  
  $("#lastUpdated").html(json.current.last_updated);
  $("#temp").html(json.current.temp_c + "&degC");
  $("#description").html(json.current.condition.text);  
  $("#icon").empty();
  $("#icon").append("<img class='center-block'  src='https:" + json.current.condition.icon + "' alt='weather icon'>");
  $("#windSpeed").html(json.current.wind_kph + "kph " + json.current.wind_dir);
  $("#humidity").html(json.current.humidity + "%");
  $("#precipitation").html(json.current.precip_mm + "mm")
  $("#feelsLike").html(json.current.feelslike_c + "&degC")
  });
  });
}
  });
  
  $("#imperial").on("click", function(){
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) { 
  $.getJSON("https://api.apixu.com/v1/current.json?key=03c4ca97febf4f77afc120158172701&q="+ position.coords.latitude +"," +position.coords.longitude+ "", function(json){
  $("#cityName").html(json.location.name + ", " + json.location.country);
  
  $("#lastUpdated").html(json.current.last_updated);
  $("#temp").html(json.current.temp_f + "&degF");
  $("#description").html(json.current.condition.text);  
  $("#icon").empty();
  $("#icon").append("<img class='center-block'  src='https:" + json.current.condition.icon + "' alt='weather icon'>");
  $("#windSpeed").html(json.current.wind_mph + "mph " + json.current.wind_dir);
  $("#humidity").html(json.current.humidity + "%");
  $("#precipitation").html(json.current.precip_in + "in")
  $("#feelsLike").html(json.current.feelslike_f + "&degF")
  });
  });
}
  });
});