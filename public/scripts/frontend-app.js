//Index EJS
$(() => {
  function createPizzaCardRead() {
    let $pizzacolumn = $('div').addClass('col-4')
    let $pizzacard = $('<div>').addClass();
    let $pizzaimg = $('<img>').addClass().attr('src', );
    let $pizzatitle = $('<h5>').addClass();
    let $pizzadescription = $('<p>').addClass();
    let $pizzaprice = $('<h4>').addClass();

    $pizzacard.append($pizzaimg, $pizzatitle, $pizzadescription, $pizzaprice);
    $pizzacolumn.append($pizzacard);

    return $pizzacolumn

});

//Customer EJS
$(() => {

  function createPizzaCardAdd() {
    let $pizzacolumn = $('div').addClass('col-4')
    let $pizzacard = $('<div>').addClass();
    let $pizzaimg = $('<img>').addClass().attr('src', );
    let $pizzatitle = $('<h5>').addClass();
    let $pizzadescription = $('<p>').addClass();
    let $pizzaprice = $('<h4>').addClass();
    let $quantityform = $('<form>').addClass('form-inline');
    let $quantitytitle = $('<span>').text('Quantity');
    let $quatityinput = $('<input>').addType('text');
    let $quantitybutton = $('<button>').addClass('btn btn-outline-secondary').addType('submit').text('Add to Order');

    $quantityform.append($quantitytitle, $quatityinput, $quantitybutton);
    $pizzacard.append($pizzaimg, $pizzatitle, $pizzadescription, $pizzaprice, $quantityform);
    $pizzacolumn.append($pizzacard);

    return $pizzacolumn
  }

  function createCartCard
});