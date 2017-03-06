var quote = '';
var author = '';

function parseQuote(response)
  {	                  document.getElementById("quote").innerHTML = response.quoteText;	  document.getElementById("author").innerHTML = "-" + response.quoteAuthor;
  $("#tweet").empty();   
  $("#tweet").append("<a class='twitter-share-button' href='https://twitter.com/intent/tweet?text="+ response.quoteText + " -" + response.quoteAuthor + "' data-size='large' target='_block'><img class='center-block' style='width:5%' src='http://www.womenonwaves.org/image/2012/6/19/twitter_bird_blue_on_white.png(mediaclass-base-page-main.d2c518cc99acd7f6b176d3cced63a653791dedb3).jpg'></a>");
	}


$(document).ready(function(){

  $("#getQuoteBtn").on("click", function(){
    
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en',
      dataType: "jsonp"
    });
  });
});