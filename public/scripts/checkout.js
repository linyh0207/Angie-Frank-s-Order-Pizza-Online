  $(function () {
  //id NOT set yet
  //For checkout button
    let $button = $('#checkoutbtn')
    $button.on('submit', function (e) {
      console.log("BUTTON_CLICKED!")
      e.preventDefault();
      $('#status').removeAttr('hidden');

      $.ajax({
        method: "GET",
        url: "/ownermes",
        }
    });






    const createMenu = function (item) {
      let $col = $('<div>').addClass('col-4');
      let $item = $('<div>').addClass('card');
      let $img = $('<img>').addClass('card-image-top').attr('src',item.url);
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
      console.log('Button Clicked');
      let $this = $(this);

      let quant = $this.siblings('input[data-add-quantity]').val();

      let $cart = $('<div>').addClass('card-body')
      let $cartName = $('<p>').addClass('card-title').text($this.data('add-pizza'));
      let $img = $('<img>').attr('src', $this.data('add-url'));
      let $cartQuan = $('<p>').addClass('card-subtitle').text(`Quantity: ${quant}`);
      let $cartPrice = $('<p>').addClass('card-subtitle')
      .text('$ '+ ($this.data('add-price')) * quant );

      $cart.append($cartName, $img, $cartQuan, $cartPrice)
      $('#cartContainer').append($cart);






      return false;
    })



  });


