"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
    .select("id")
    .from("orders")
    .where({status: 'preparing'})
    .then((results) => {
      res.json(results);
    });
  });

  return router;
}
