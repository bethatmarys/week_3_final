//Business Logic
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
