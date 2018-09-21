$(function () { 
    const createMenu = function (item) {
        let $col = $('<div>').addClass('col-4');
        let $item = $('<div>').addClass('card');
        let $img = $('<img>').addClass('card-image-top').attr('src',item.url);
        let $name = $('<p>').addClass('card-title').text(item.pizza_name);
        let $des = $('<p>').addClass('card-text').text(item.description);
        let $price = $('<p>').addClass('price').text(item.price);
        
        $item.append($img, $name, $des, $price);
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
  
})