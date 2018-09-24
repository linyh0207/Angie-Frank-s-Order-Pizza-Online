$(function () {
    //Create, Render and Load Menu Items -- Start
const createMenu = function (item) {
  let $col = $('<div>').addClass('col-4');
  let $item = $('<div>').addClass('card');
  let $img = $('<img>').addClass('card-image-top').attr('src', item.url);
  let $name = $('<p>').addClass('card-title').text(item.pizza_name);
  let $des = $('<p>').addClass('card-text').text(item.description);
  let $price = $('<p>').text(item.price);
  let $form = $('<form>').addClass('form-inline');
  let $quantity = $('<span>').text('Quantity');
  let $input = $('<input>').attr('type', 'text').attr('data-add-quantity', item.pizza_name);
  let $add = $('<button>').addClass('btn btn-outline-secondary').attr('type', 'submit')
    .attr('data-add-pizza', item.pizza_name)
    .attr('data-add-price', item.price)
    .attr('data-add-url', item.url)
    .attr('data-add-id', item.id)
    .text('Add to Order');
  let $errorMsg = $('<div>').addClass('errorMsg').attr('data-add-error', item.pizza_name).attr('hidden', 'true');

  $form.append($quantity, $input, $add, $errorMsg);
  $item.append($img, $name, $des, $price, $form);
  $col.append($item);

  return $col;
}

    const renderMenu = function (items) {
      items.forEach(function(pizza) {
        $('#menucontainer').prepend(createMenu(pizza));
      })
    }

  const loadMenu = function () {
    $.ajax('/customer/menu', { method: 'GET' })
    .then(function (pizzas) {
      renderMenu(pizzas);
    })
  }

  loadMenu();
  //Create, Render and Load Menu Items -- End

  //Create and Render Shopping Cart -- Start
  const createCartElement = function (shoppingItem) {
    let $cart = $('<div>').addClass('card-body')
    let $cartName = $('<p>').addClass('card-title').text(shoppingItem.pizza_name);
    let $cartQuan = $('<p>').addClass('card-subtitle').text(`Quantity: ${shoppingItem.qty}`);
    let $cartPrice = $('<p>').addClass('card-subtitle').text(`Price: $${shoppingItem.sub_total}`);
    let $cartURL = $('<img>').attr('src', shoppingItem.url);
    $cart.append($cartName, $cartURL, $cartQuan, $cartPrice);
    return $cart;
  }

  const renderCart = function (shoppingItems) {
    let total = 0;
    let totalqty =0;
    // let baseTime = 0;
    shoppingItems.forEach(function(shoppingItem){
      total = total += parseFloat(shoppingItem.sub_total);
      totalqty = totalqty += parseInt(shoppingItem.qty)

      $('#totalMoney').text(` $${total}`);
      $('#time').text(`Estimated time ${totalqty *5 + 20} min`);
      $('#cartcontainer').append(createCartElement(shoppingItem));
    })
  }
  // Create and Render Shopping Cart -- Ends

    //Add a item to shopping cart when valid quantity enter and click the add button-- Start
    let $menuContainer = $('#menucontainer');

    $menuContainer.on('click', '*[data-add-pizza]', function(event) {
        event.preventDefault();
        let $this = $(this);
        let quant = $this.siblings('input[data-add-quantity]').val();
        let errorMsg = $this.next();
        let $subTotal = ($this.data('add-price')) * quant
        let formData = {
            'menu_id': $this.data('add-id'),
            'qty': quant,
            'sub_total': $subTotal
        }

        if(!quant || quant === '0'){
            errorMsg.removeAttr('hidden').text('invalid quantity');
                } else {
                $.ajax
                ({
                  method: "POST",
                  url: "/customer/cart",
                  data: formData,
                  success: function(result){
                    errorMsg.empty();
                    $this.siblings('input[data-add-quantity]').val('');
                    $('#cartcontainer').empty();
                    $.ajax
                    ({
                      method:'get',
                      url:'/customer/cart',
                      success: function(result){
                        console.log("it was success");
                        renderCart(result);
                      },
                      error: function(err){
                        console.log("there was an error");
                      }
                    })
                },
                error: function(err){
                  alert("we are in error", err);
                }
              });
        };
    });
//Add a item to shopping cart when valid quantity enter and click the add button -- End

  //Load shopping cart -- Start
  const loadCart = function () {
    $.ajax('/customer/cart', {
        method: 'GET'
      })
      .then(function (shoppingItems) {
        renderCart(shoppingItems);
      });
  };
  loadCart();
  //Load shopping cart -- End

});
