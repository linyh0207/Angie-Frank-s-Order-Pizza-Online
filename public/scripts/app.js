// $(function () {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(function () {
  //id NOT set yet
  //For checkout button
  let $button = $('#checkoutbutton')
  $button.click(function (e) {
    e.preventDefault();
    // NEED /checkout page in html!
    $.ajax({
      method: "GET",
      url: "/checkout",
      success: function (res) {
        alert('SUCCESS');
      }
    })
  });
});
