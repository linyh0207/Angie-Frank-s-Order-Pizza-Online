$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});


//Customer EJS
$(() => {
  function createPizzaCard() {
    let $card = $('<div>').addClass();
    let $pizzaimg = $('<img>').addClass().attr('src', )
  }
});