

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
    const fakeMenu = [
      {
        name: 'abc', 
        price: 5.99,
        description: 'GOOOOD',
        url: 'fdfdfdfdf'
      }
    ]






    const createMenu = function (item) {
      let $item = $('<div>').addClass('card');
      let $img = $('<img>').addClass('card-image-top').attr('src',item.url);
      let $name = $('<h5>').addClass('card-title').text(item.name);
      let $des = $('<p>').addClass('card-text').text(item.description);
      let $price = $('<h4>').text(item.price);
      let $form = $('<form>').addClass('form-inline');
      let $quantity = $('<span>').text('Quantity');
      let $input = $('<input>').attr('type', 'text');
      let $add = $('<button>').addClass('btn btn-outline-secondary').attr('type', 'submit').text('Add to Order');
    
      $item.append($img, $name, $des, $price, $form);
      $form.append($quantity, $input, $add);
    
      return $item;
    }


    const renderMenu = function (items) {
      items.forEach(function(pizza) {
        $('#menuContainer').prepend(createMenu(pizza));
      })
    }

    renderMenu(fakeMenu);


  });







// function makeLanguageCard(language){
//   var $card = $(`<div class="col-4 col-sm-6 col-xs-12 language">
//   <div class="card">
//     <img class="card-img-top" src="${language.imgUrl}" alt="${language.name}">
//     <div class="card-body">
//       <h5 class="card-title">${language.name}</h5>
//       ${language.description.split('\n').map(para => `<p class="card-text">${para}</p>`).join('')}
//       <a href="#" class="btn btn-primary" data-alert-name="${language.name}">Go somewhere</a>
//       <a href="#" class="btn btn-danger" data-delete-id="${language.id}">Delete this</a>
//     </div>
//   </div>    
// </div>`);