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

  router.post("/", (req, res) => {
    knex('orders')
    .where({
      id: req.body.orderId,
    })
    .update({
      status: 'complete'
    })
    .returning('*')
    .asCallback((err, updatedRecords) => {
        if(err){
          return console.error("error running handler", err);
      } else {
        const updatedRecord = updatedRecords[0];
        res.json(updatedRecords)
        console.log('Updated Record is', updatedRecord);
      }
   });
  });
  return router;
}
