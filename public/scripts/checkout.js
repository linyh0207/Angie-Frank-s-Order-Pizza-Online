$(function () {
    //Expand checkout details when click checkout button -- Start
    let $button = $('#checkoutbtn')
    $button.on('submit', function (e) {
      e.preventDefault();
      $('#status').removeAttr('hidden');
      // $.ajax({
      //   method: "GET",
      //   url: "/checkout",
      //   success: function (res) {
      //     alert('SUCCESS');
      //   }
      // })
      // Will need to set up error mesage for empty shopping cart
    });
    //Expand checkout details when click checkout button -- End
});
