"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    knex('cart')
    .insert({
      'menu_id': req.body.menu_id,
      'qty': req.body.qty,
      'sub_total': req.body.sub_total
    })
    .returning('*')
    .asCallback((err, createdRecords) => {
      if(err){
          return console.error("error running handler", err);
      } else{
      const createdRecord = createdRecords[0];
        console.log('Created Record is', createdRecord);
      }
      knex.destroy(); 
   });
  });
  return router;
}
