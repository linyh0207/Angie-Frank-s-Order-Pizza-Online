$(function () {
    //Expand checkout details when click checkout button -- Start
    let $button = $('#checkoutbtn')
    $button.on('submit', function (e) {
      e.preventDefault();
      $('#status').removeAttr('hidden');
      $.ajax({
        method: "GET",
        url: "/ownermes",
      });
 
 let formData = { 'phoneNumber': $('#cusNumber').val() }
      $.ajax({
            method:"POST",
            url:"/customer/checkout",
            data: formData
        }).then(function() {
          $('#cartcontainer').empty();
          $('#totalMoney').text(`$0.00`);
          $('#cusNumber').val('');
          console.log('CHEEEEEEEEEEEEEEEEEEEEECKOUT')
        })
      });






    //Expand checkout details when click checkout button -- End
});
