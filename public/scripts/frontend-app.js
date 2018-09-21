//Index EJS
$(() => {

  function createPizzaCardRead() {
    let $pizzacolumn = $('<div>').addClass('col-4')
    let $pizzacard = $('<div>').addClass();
    let $pizzaimg = $('<img>').addClass().attr('src', );
    let $pizzatitle = $('<p>').addClass();
    let $pizzadescription = $('<p>').addClass();
    let $pizzaprice = $('<p>').addClass();

    $pizzacard.append($pizzaimg, $pizzatitle, $pizzadescription, $pizzaprice);
    $pizzacolumn.append($pizzacard);

    return $pizzacolumn
  }

  $('div.row').append(createPizzaCardRead())

});

//Customer EJS
$(() => {

  function createPizzaCardAdd() {
    let $pizzacolumn = $('div').addClass('col-4')
    let $pizzacard = $('<div>').addClass();
    let $pizzaimg = $('<img>').addClass().attr('src', );
    let $pizzatitle = $('<p>').addClass();
    let $pizzadescription = $('<p>').addClass();
    let $pizzaprice = $('<p>').addClass();
    let $quantityform = $('<form>').addClass('form-inline');
    let $quantitytitle = $('<span>').text('Quantity');
    let $quatityinput = $('<input>').addType('text');
    let $quantitybutton = $('<button>').addClass('btn btn-outline-secondary').addType('submit').text('Add to Order');

    $quantityform.append($quantitytitle, $quatityinput, $quantitybutton);
    $pizzacard.append($pizzaimg, $pizzatitle, $pizzadescription, $pizzaprice, $quantityform);
    $pizzacolumn.append($pizzacard);

    return $pizzacolumn
  }

  $('div.row').append(createPizzaCardAdd());

  function createCartCard() {
    let $cartbody = $('<div>').addClass();
    let $carttitle = $('<p>').addClass();
    let $cartquantity = $('<p>').addClass();
    let $cartprice = $('<p>').addClass();

    $cartbody.append($carttitle, $cartquantity, $cartprice);

    return $cartbody
  }

  $('div.card').append(createCartCard());

});

//Vendor EJS
$(() => {

  function createOrder() {
    let $ordercard = $('<div>').addClass();
    let $ordersummary = $('<p>').addClass();
    let $orderform = $('<form>').addClass("form-inline");
    let $completedbutton = $('<button>').addClass("btn btn-outline-secondary").addType('button');

    $orderform.append($completedbutton);
    $ordercard.append($ordersummary, $orderform);

    return $ordercard
  }

  $('div.col-4').prepend(createOrder());

  function createCompleted() {
    let $ordercard = $('<div>').addClass();
    let $ordersummary = $('<p>').addClass();

    $ordercard.append($ordersummary);

    return $ordercard
  }

  $('div.col-4').prepend(createCompleted());
});
