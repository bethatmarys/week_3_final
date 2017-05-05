//Business Logic
var pigLatin = function(inputtedPhrase) {
  return inputtedPhrase;
};


$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
var userInput = $("input#phrase").val();

    var result = pigLatin(userInput);

    $("#result").text(result);
  });
});

// var return = function(phrase) {
//   if ((number  4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;



//User Interface Logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    //call a leap-year function pass the year as an argument
    event.preventDefault();
    //this will stop the function at the end of the run
    var year = parseInt($("input#phrase").val());
    //this tells the computer that the user input is a number "parseInt"
    // var result = return(year);
    //call the leap year function and pass the year as a parameter

    // $(".phrase").text(year);

    // for (#phrase=1; #phrase<1; #phrase++) {

    if("phrase"/3 === "Ping" ) {
    }
    else if ("phrase"/5 === "Pong") {
    }
    else if ("phrase"/15 === "Ping Pong") {
    }
    else {
      //  console.log(i);
    // }
}
    // };

    //the result of a true or false

    $("#result").show();
  });
});







// userInput = userInput.split("").join("");
// //Adds way to vowels
// for (var index = 0; index < userInput.length; index +=1) {
//   if (userInput[0] === vowels[index]) {
//     userInput += "way";
//   }
// }
// Adds ay to consonan


// var remove = userInput.replace(/ /g, '').replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()]0-9/g,"");


// var reversed = remove.split("").reverse().join("");







// userInput = userInput.split("").join("");
// //Adds way to vowels
// for (var index = 0; index < userInput.length; index +=1) {
//   if (userInput[0] === vowels[index]) {
//     userInput += "way";
//   }
// }
// Adds ay to consonan


// var remove = userInput.replace(/ /g, '').replace(/[.,\/#!$%@?'|"+\^&\*;:{}=\-_`~()]0-9/g,"");


// var reversed = remove.split("").reverse().join("");




// // //Business Logic
//
// var pingPong = function(inputtedPhrase) {
//   return inputtedPhrase;
// };
//
// $(function() {
//   $("form#formOne").submit(function(event) {
//     event.preventDefault();
// var userInput = $("input#phrase").val();
//
//   var result = pingPong(userInput);
//
//     $("#result").text(result);
//   });
// });
// var pigLatin = function(inputtedPhrase) {
//   return inputtedPhrase;
// };
