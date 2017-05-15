//Business Logic
var pingPong = function(number) {
  var result = [];

  for (var inputNumber = 1; inputNumber <= number; inputNumber++) {
    if (inputNumber % 15 === 0) {
        result.push("Ping Pong");
    } else if (inputNumber % 5 === 0) {
        result.push("Pong");
    } else if (inputNumber % 3 === 0) {
        result.push("Ping");
    } else
        result.push(" " + inputNumber);
    };
     return result;
};



//Front End

$(document).ready(function() {
  $("form#formOne").submit (function(event) {
    //call a inputted number function and pass the number as an arguement
    event.preventDefault();
    //this will stop the function at the end of the run
    var number = parseInt($("input#number").val());
    //this tell the computer that the user input is a number
    var result = pingPong(number);
    //call the inputted number function and pass the number as a parameter
      $("p").text(result);
    });
  });
