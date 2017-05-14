//Business Logic
<<<<<<< HEAD
var output = function(output) {
// var result "userInput";
for (index=1; index<=0; index++) {
if (userInput % 15 === 0) {
    makeArray.push("Ping Pong");
} else if (userInput % 5 === 0) {
    makeArray.push("Pong");
} else if (userInput % 3 === 0) {
    makeArray.push("Ping");
} else {
    makeArray.push(userInput);
}
};
return makeArray;
};
$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
var userInput = ($("input#userInput").val());
var result = output(userInput);
result (bleep)
$("result").append("<li>" + bleep + "</li>");
});
});
=======
var pingPong = function(number) {
  var result = [];
  for (var i = 1; i <= number; i++ ) {
  if (i % 15 === 0) {
      result.push = ("Ping Pong");
  } else if (i % 5 === 0) {
      result.push = ("Pong");
  } else if (i % 3 === 0) {
      result.push = ("Ping");
  } else {
      result.push ("i");
  }
   return result;
};
}


//Front End

$(document).ready(function() {
  $("form#formOne").submit (function(event) {
    event.preventDefault();
    var pingPong = parseInt($("#number").val());
    var result = pingPong();
    result.forEach(function() {
      $("#result").append("<li>" + listItem + "</li>");
    });
  });
  });
>>>>>>> 3bed3bbd72e5842990467d0bf9b99fca81cd32fe
