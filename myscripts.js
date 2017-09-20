var currentQuote = "";

$.getJSON("https://talaikis.com/api/quotes/random/ ", function(json) {
  currentQuote = json["quote"];
      $("p").html(currentQuote);
});

$("#quoteButton").on("click", function(){
  $.getJSON("https://talaikis.com/api/quotes/random/ ", function(json) {
    currentQuote = json["quote"];
      $("p").html(currentQuote);

  });
});


$("#twitter").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + currentQuote,'_blank');

});
