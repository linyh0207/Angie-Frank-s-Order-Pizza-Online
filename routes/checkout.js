"use strict";

const express = require('express');
const router = express.Router();

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

    const getOrderId = function (phoneNum) {
      return knex('orders')
      .select('*')
      .where("phone", parseInt(phoneNum));
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
      const orderIdPrms = getOrderId(phoneNum);
      const cartItems = await cartItemsPrms;
      const orderId = await orderIdPrms;


      console.log(orderId[0].id);
      console.log(orderId)

      const lineItemsToCreate = cartItems.map(cartItem => ({
        'id': undefined,
        'order_id': orderId[0].id,
        'menu_id': cartItem.menu_id,
        'qty': cartItem.qty,
        'total_price': cartItem.sub_total
      }));

      const deleteCartItemsPrms = deleteCartItems();

      const orderlineItem = await createLineItems(lineItemsToCreate);

      await deleteCartItemsPrms;

      return res.json(orderlineItem);
    }

    createOrderPrmsAsync(req.body.phoneNumber)
  })
  return router;
}