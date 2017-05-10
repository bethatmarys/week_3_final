//Business Logic
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
