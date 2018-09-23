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
    //Create, Render and Load Menu Items -- End
  })