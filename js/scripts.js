//Business Logic
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
// $(document).ready(function() {
//   $("form#form-group").submit(function(event) {
//     var number1 = parseInt($("input#numberone").val());
//     var number2 = parseInt($("input#numbertwo").val());
// // debugger;
//     if (!(number1)){
//       alert("Please enter a number");
//     }
//     else if ((number1 < 0) || (number2 < 0)) {
//       alert ("Please enter a postive number");
//     }
//     else if ((number1 = "") || (number2 = "")) {
//       alert ("Please enter a ? number");
//     }
//
//     var outputs = [];
//
//     var total = 0;
//     for (var currentNumber = 0; currentNumber <= number1; currentNumber += number2) {
//       total += number2 ;
//       outputs.push(total);
//     }
//      $("p").append("your output of : " + " " + output + ".");
//
//
//
//     event.preventDefault();
//   });
//   });
