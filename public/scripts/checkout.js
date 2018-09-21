$(function() {
    let $button = $('#checkOut')
    $button.submit(function (e) {
        e.preventDefault();
        $('#status').removeAttr('hidden');
    })



});  

