

  $(function () {
  //id NOT set yet
  //For checkout button
    let $button = $('#checkoutbtn')
    $button.on('submit', function (e) {
      e.preventDefault();
      $('#status').removeAttr('hidden');
      // NEED /checkout page in html!
      // $.ajax({
      //   method: "GET",
      //   url: "/checkout",
      //   success: function (res) {
      //     alert('SUCCESS');
      //   }
      // })
    });






    const createMenu = function (item) {
      let $col = $('<div>').addClass('col-4');
      let $item = $('<div>').addClass('card');
      let $img = $('<img>').addClass('card-image-top').attr('src',item.url);
      let $name = $('<h5>').addClass('card-title').text(item.pizza_name);
      let $des = $('<p>').addClass('card-text').text(item.description);
      let $price = $('<h4>').text(item.price);
      let $form = $('<form>').addClass('form-inline');
      let $quantity = $('<span>').text('Quantity');
      let $input = $('<input>').attr('type', 'text').attr('data-add-quantity', item.pizza_name);
      let $add = $('<button>').addClass('btn btn-outline-secondary').attr('type', 'submit')
      .attr('data-add-pizza', item.pizza_name)
      .attr('data-add-price', item.price)
      .text('Add to Order');

      $form.append($quantity, $input, $add);
      $item.append($img, $name, $des, $price, $form);
      $col.append($item);

      return $col;
    }


    const renderMenu = function (items) {
      items.forEach(function(pizza) {
        $('#menuContainer').prepend(createMenu(pizza));
      })
    }

    const loadMenu = function () {
      $.ajax('/customer/menu', { method: 'GET' })
      .then(function (pizzas) {
        renderMenu(pizzas);
      })
    }

    loadMenu();

    let $menuContainer = $('#menuContainer');
    $menuContainer.on('click', '*[data-add-pizza]', function(event) {
      let $this = $(this);

      let quant = $this.siblings('input[data-add-quantity]').val();

      let $cart = $('<div>').addClass('card-body')
      let $cartName = $('<h5>').addClass('card-title').text($this.data('add-pizza'));
      let $cartQuan = $('<h5>').addClass('card-subtitle').text(`Quantity: ${quant}`);
      let $cartPrice = $('<h6>').addClass('card-subtitle')
      .text('$ '+ ($this.data('add-price')) * quant );

      $cart.append($cartName, $cartQuan, $cartPrice)
      $('#cartContainer').append($cart);






      return false;
    })



  });


