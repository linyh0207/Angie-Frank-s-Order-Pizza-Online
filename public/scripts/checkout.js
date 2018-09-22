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


      // NEED error mesage for empty shopping cart
    });

    const createMenu = function (item) {
      let $item = $('<div>').addClass('card');
      let $img = $('<img>').addClass('card-image-top').attr('src',item.url);
      let $name = $('<p>').addClass('card-title').text(item.pizza_name);
      let $des = $('<p>').addClass('card-text').text(item.description);
      let $price = $('<h4>').text(item.price);
      //need to add class for subtotal 
      //maybe separate the quantity to easy reference
      //handle zero ihnput for quantity
      let $form = $('<form>').addClass('form-inline');
      let $quantity = $('<span>').text('Quantity');
      let $input = $('<input>').attr('type', 'text').attr('data-add-quantity', item.pizza_name);
      let $add = $('<button>').addClass('btn btn-outline-secondary').attr('type', 'submit')
      .attr('data-add-pizza', item.pizza_name)
      .attr('data-add-price', item.price)
      .attr('data-add-id', item.id)
      .text('Add to Order');
      let $errorMsg = $('<div>').addClass('errorMsg').attr('data-add-error', item.pizza_name).attr('hidden','true');
  
      $item.append($img, $name, $des, $price, $form);
      $form.append($quantity, $input, $add, $errorMsg);
    
      return $item;
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
            $.ajax({
            method: "POST",
            url: "/customer/cart",
            data: formData
                }).then (function () {
                    errorMsg.empty();
                    $this.siblings('input[data-add-quantity]').val('');
                    return $.ajax('/customer/cart');
                }).catch((err) => {
                    console.log('err',err)
                });
        };

        $.ajax({
            method: "GET",
            url: "/customer/cart"
        }).done((carts) => {
            for (item of carts){
                let $cart = $('<div>').addClass('card-body')
                let $cartName = $('<h5>').addClass('card-title').text(item.pizza_name);
                let $cartQuan = $('<h5>').addClass('card-subtitle').text(item.qty);
                let $cartPrice = $('<h6>').addClass('card-subtitle').text(item.sub_total);
                $('#cartContainer').append($cart);
                $cart.append($cartName, $cartQuan, $cartPrice)
                };
        });

         return false;
    });
    })


