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
})