$(function () {
    //Create, Render and Load orderline -- Start
    const createId = function (iD) {
      let $submitButton = $('<button>').addClass('submitButton').text('submit').attr('data-submit', iD.id);
      return $submitButton;
    }
  
    const renderOrder = function (iDs) {
      iDs.forEach(function(iD) {
        $('div#submitContainer').prepend(createId(iD));
      }) 
    }
  
    const loadSubmit = function () {
      $.ajax('/owner/submit', { method: 'GET' })
      .then(function (iDs) {
        renderOrder(iDs);
      })
    }
  
    loadSubmit();
    //Create, Render and Load Menu Items -- End
  })