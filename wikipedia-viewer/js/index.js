$(document).ready(function(){
  $('#button').on("click", function(){
    $('#initial').addClass('animated fadeOutDown');
    $('#final').addClass('animated fadeInUp')
    $('#final').append('<h1 class="text-center" style="font-family:Pacifico; font-size:50px; margin-top:30px; margin-bottom:30px;">Results</h1>');
    
    var query = $('#inputText').val();
    var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=" + query + "&callback=?"; 
    
    $.getJSON(api, function(json){
      $.each(json.query.search, function(index, value){
        $('#final').append("<div class='list-group'><a target='_blank' href='https://en.wikipedia.org/wiki/" + value.title + "' class='list-group-item text-center'><h4 class=' text-center list-group-item-heading'>" + value.title + "</h4><p class='list-group-item-text'>" + value.snippet + "</p></a></div>");
      });
    });
  });
});