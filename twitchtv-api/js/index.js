$(document).ready(function() {

  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  var apiStreams = 'https://wind-bow.gomix.me/twitch-api/streams/';
  var callback = "?callback=?"
  var apiChannels = 'https://wind-bow.gomix.me/twitch-api/channels/';
  var deleteElements = [];
  for (var j = 0; j < channels.length; j++) {
   
    (function(index){
    var clueless = $.getJSON(apiChannels + channels[j] + callback, function(json) {
      if (json.status == 404) {
        $("#allRow").append("<ul class='list-group'><li class='list-group-item'>" + json.message + "</li></ul>");
        deleteElements.push(index);
      }
    });
      })(j);
  }
  
  for (var i = 0; i < channels.length; i++) {
    (function(index){
    $.getJSON(apiStreams + channels[i] + callback, function(json) {
      if (json.stream != null) {
        $("#onlineRow").append("<ul class='list-group'><li class='list-group-item'><img style='width:70px' src='" + json.stream.channel.logo + "' alt='logo' class='img-circle'></li><li class='list-group-item'>" + json.stream.channel.display_name + "</li><li class='list-group-item'><a href='https://twitch.tv/" + json.stream.channel.display_name + "' target='_blank'>" + json.stream.channel.status + "</a></li></ul>");
        $("#allRow").append("<ul class='list-group'><li class='list-group-item'><img style='width:70px' src='" + json.stream.channel.logo + "' alt='logo' class='img-circle'></li><li class='list-group-item'>" + json.stream.channel.display_name + " (Online now!)</li><li class='list-group-item'><a href='https://twitch.tv/" + json.stream.channel.display_name + "' target='_blank'>" + json.stream.channel.status + "</a></li></ul>");
      } 
      else {
        
        console.log("<ul class='list-group'><li id= 'list" + index + "' class='list-group-item'>" + json._links.channel.slice(38) + "</li><li class='list-group-item'><a href='https://twitch.tv/" + json._links.channel.slice(38) + "' target='_blank'>Go to channel</a></li></ul>");
        
        $("#offlineRow").append("<ul class='list-group'><li id='list" + index + "' class='list-group-item'>" + json._links.channel.slice(38) + "</li><li class='list-group-item'><a href='https://twitch.tv/" + json._links.channel.slice(38) + "' target='_blank'>Go to channel</a></li></ul>");
        $("#allRow").append("<ul class='list-group'><li class='list-group-item'>" + json._links.channel.slice(38) + "</li><li class='list-group-item'><a href='https://twitch.tv/" + json._links.channel.slice(38) + "' target='_blank'>Go to channel</a></li></ul>");
    }
    });
  
    })(i);
  }
});