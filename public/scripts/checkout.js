$(function () {
    //Expand checkout details when click checkout button -- Start
    let $button = $('#checkoutbtn')
    $button.on('submit', function (e) {
      e.preventDefault();
      $('#status').removeAttr('hidden');
    //   $.ajax({
    //     method: "GET",
    //     url: "/checkout",
    //     success: function (res) {
    //       alert('SUCCESS');
    //     }
    //   })
  // Will need to set up error mesage for empty shopping cart
    //   if(total = zero){
    //       console.log('no item to checkout');
    //       } else{
    
    let formData = $('#cusNumber')

    $.ajax({
        method:"POST",
        url:"checkout",
        data
    })

        







    });
    //Expand checkout details when click checkout button -- End
});
