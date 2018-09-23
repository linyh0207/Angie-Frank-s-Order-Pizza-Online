"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
    .select("order_id", "pizza_name", "qty", "url")
    .from("orderline")
    .join('orders', 'orderline.order_id', 'orders.id')
    .where({status: 'preparing'})
    .join('menu', 'menu.id', 'orderline.menu_id')
    .then((results) => {
      res.json(results);
    });
  });

  return router;
}
