<<<<<<< HEAD
// $(() => {
=======
// $(function () {
>>>>>>> c90fea935473eeb00ff3c750dfd9f1481153e5f1
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
<<<<<<< HEAD
=======

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
>>>>>>> c90fea935473eeb00ff3c750dfd9f1481153e5f1
