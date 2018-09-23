$(function () {

  //Create, Render and Load orderline -- Start
  const createOrder = function (item) {
    let $order = $('<div>').addClass('col-3');
    let $orderNum = $('<h4>').addClass('card-title').text(item.order_id);
    let $name = $('<h5>').addClass('card-title').text(item.pizza_name);
    let $qty = $('<h5>').addClass('card-title').text(item.qty);
    
    $order.append($orderNum, $name, $qty);
    return $order;
  }

  const renderOrder = function (orders) {
    orders.forEach(function(order) {
      $('div#orderContainer').prepend(createOrder(order));
    }) 
  }

  const loadOrder = function () {
    $.ajax('/owner/order', { method: 'GET' })
    .then(function (orders) {
      renderOrder(orders);
    })
  }

  loadOrder();
  //Create, Render and Load Menu Items -- End


    //Create, Render and Load orderline -- Start
    const createId = function (iD) {
      let $completeButton = $('<button>').addClass('completeButton').text('complete').attr('data-complete', iD.id);
      return $completeButton;
    }
  
    const renderButton = function (iDs) {
      iDs.forEach(function(iD) {
        $('div#completeContainer').prepend(createId(iD));
      }) 
    }
  
    const loadComplete = function () {
      $.ajax('/owner/complete', { method: 'GET' })
      .then(function (iDs) {
        renderButton(iDs);
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
          renderButton(iDs);
          $('#completeContainer').empty();
          console.log('This is the result' + iDs);
          $.ajax('/owner/order', { method: 'GET' })
          .then(function (orders) {
            renderOrder(orders);
          })
          $('#orderContainer').empty();
        })
      })
    })
  })