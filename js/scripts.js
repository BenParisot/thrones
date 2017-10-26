var house1 = 0;
var house2 = 0;
var house3 = 0;
var house4 = 0;

$(document).ready(function() {
  $("#animals").submit(function(event) {

    var animal = $("#user-response").val();

    if (animal === "1") {
      $('#elephant').hide();
      $('#loris').hide();
      $('#mantis').show();
    } else if (animal === "2") {

      $('#mantis').hide();
      $('#loris').hide();
      $('#elephant').show();

    } else if (animal === "3"){
      $('#elephant').hide();
      $('mantis').hide();
      $('#loris').show();

    } else if (animal === "2") {

      $('#mantis').hide();
      $('#loris').hide();
      $('#elephant').show();


    event.preventDefault();
  });
});
