$(function () {
  //For chomplete button
  let $button = $('#completebutton');
  $button.on('submit', function (e) {
    console.log("BUTTON_CLICKED!")
    e.preventDefault();

    $.ajax({
        method: "GET",
        url: "/customermes",
      });
  });
});