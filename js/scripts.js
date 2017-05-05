// //Business Logic

var pingPong = function(inputtedPhrase) {
  return inputtedPhrase;
};

$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
var userInput = $("input#phrase").val();

    var result = pingPong(userInput);

    $("#result").text(result);



  });
});
