"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    knex('cart')
    .insert({
      'menu_id': menu.id,
      'qty': qty,
      'sub_total': sub_total
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
