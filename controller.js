$(document).ready(function () {

  //Display the speak message

  eel.expose(DisplayMessage)
  function DisplayMessage(message) {
    $(".siri-message li:first").text(message);
    $('.siri-message').textillate('message');

  }


});
