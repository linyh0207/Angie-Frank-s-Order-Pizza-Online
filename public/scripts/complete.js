$(function () {

  //Create, Render and Load orderline -- Start
  const createOrder = function (item) {
    let $order = $('<div>').addClass('card');
    let $orderNum = $('<p>').addClass('card-title').text(`Order #: ${item.order_id}`);
    let $name = $('<p>').addClass('card-title').text(item.pizza_name);
    let $qty = $('<p>').addClass('card-title').text(`Quantity: ${item.qty}`);
    let $itemURL = $('<img>').attr('src', item.url);

    $order.append($orderNum, $name, $qty, $itemURL);
    return $order;
  }

  const renderOrder = function (orders) {
    orders.forEach(function(order) {
      $('div#ordercontainer').prepend(createOrder(order));
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
      let $completeButton = $('<button>').addClass('completeButton btn btn-outline-secondary').text(`Complete Order #: ${iD.id}`).attr('data-complete', iD.id);
      return $completeButton;
    }

    const renderButton = function (iDs) {
      iDs.forEach(function(iD) {
        $('div#completecontainer').prepend(createId(iD));
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
    let $completeContainer = $('div#completecontainer');

    $completeContainer.on('click', '*[data-complete]', function(event) {
      event.preventDefault();

      $.ajax({
        method: "GET",
        url: "/customermes",
      });

      let $this = $(this);
      let formData = {'orderId': $this.data('complete')}
      $.ajax({
            method:"POST",
            url:"/owner/complete",
            data: formData
        }).then(function(result) {
          $('#completecontainer').empty();
          $('#ordercontainer').empty();
          $.ajax('/owner/complete', { method: 'GET' })
          .then(function (iDs) {
          renderButton(iDs);
          console.log('This is the result' + iDs);
          $.ajax('/owner/order', { method: 'GET' })
          .then(function (orders) {
            renderOrder(orders);
          })
        })
      })
    })
  })