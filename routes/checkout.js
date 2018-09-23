"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // router.get("/", function(req, res) {
  //   knex('cart')
  //   .join('menu', 'menu.id', 'cart.menu_id')
  //   .select('pizza_name','qty','sub_total')
  //   .then((results) =>{
  //     res.json(results);
  //   });
  // });

  router.post("/", (req, res) => {
    
    const createOrderRecord = function (phoneNum) {
      return knex('orders')
      .insert({
        'phone' : parseInt(phoneNum),
        'status': 'preparing'
      })
    }
    
    const getCartItems = function () {
      return knex('cart')
      .select('*')
    }

    const getOrderId = function () {
      return knex('orders')
      .select('*')
      .where('phone', parseInt(req.body.phoneNumber))
    }

    const createLineItems = function (lineItemsToCreate) {
      return knex('orderline')
      .insert(lineItemsToCreate)
    }

    const deleteCartItems = function () {
      return knex('cart')
      .del()
    }    
    
    async function createOrderPrmsAsync(phoneNum){
      const orderPrms = createOrderRecord(phoneNum);
      const cartItemsPrms = getCartItems();
      
      

      const order = await orderPrms;
      const orderIdPrms = getOrderId(req.body.phoneNumber);
      const cartItems = await cartItemsPrms;
      const orderId = await orderIdPrms;


      const lineItemsToCreate = cartItems.map(cartItem => ({
        'id': undefined,
        'order_id': orderId[0].id,
        'menu_id': cartItem.menu_id,
        'qty': cartItem.qty,
        'total_price': cartItem.sub_total
      }));
    

      const deleteCartItemsPrms = deleteCartItems();
    
      const orderlineItem = await createLineItems(lineItemsToCreate);
      // const queriedLineItems = await queryLineItemsWithDescriptionByOrder(order.id);
      await deleteCartItemsPrms;
    
      // return {
      //   ...order,
      //   lineItems: queriedLineItems
      // };
      return res.json(orderlineItem);
    }

    createOrderPrmsAsync(req.body.phoneNumber)
  })
  return router;
}
