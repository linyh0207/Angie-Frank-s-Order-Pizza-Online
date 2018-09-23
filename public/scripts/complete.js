$(function () {
    //Create, Render and Load orderline -- Start
    const createId = function (iD) {
      let $completeButton = $('<button>').addClass('completeButton').text('complete').attr('data-complete', iD.id);
      return $completeButton;
    }
  
    const renderOrder = function (iDs) {
      iDs.forEach(function(iD) {
        $('div#completeContainer').prepend(createId(iD));
      }) 
    }
  
    const loadComplete = function () {
      $.ajax('/owner/complete', { method: 'GET' })
      .then(function (iDs) {
        renderOrder(iDs);
      })
    }
  
    loadComplete();
    //Create, Render and Load orderline -- End


    //Update the status of the order after click the submit button in order for it to complete
    let $completeContainer = $('div#completeContainer');

    $completeContainer.on('click', '*[data-complete]', function(event) {
      event.preventDefault();
      let $this = $(this);
      let formData = {'orderId': $this.data('complete')}
      $.ajax({
            method:"POST",
            url:"/owner/complete",
            data: formData
        }).then(function(result) {
          $.ajax('/owner/complete', { method: 'GET' })
          .then(function (iDs) {
          renderOrder(iDs);
          $('#completeContainer').empty();
          console.log('This is the result' + iDs);
        })
      })
    })
  })