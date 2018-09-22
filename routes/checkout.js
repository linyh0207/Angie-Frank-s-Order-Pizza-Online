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
    //insert into the table.
    knex('orders')
    .insert({
      'phone': parseInt(req.body.phoneNumber),
      'status': 'preparing'
    })
    .returning('*')
    .asCallback((err, createdRecords) => {
      if(err){
        return console.error("error running handler", err);
      } else{
        const createdRecord = createdRecords[0];
        res.json(createdRecords)
        console.log('Created Record is', createdRecord);
      }
    });

    // knex.select('*').from('cart')


    // knex('orderline')
    // .insert({
    //   'order_id': 
    // }

  });
  return router;
}
