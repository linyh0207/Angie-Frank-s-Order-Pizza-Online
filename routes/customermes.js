"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    client.messages.create({
        to: '+16476078485',
        from: '+16138016248',
        body: 'You have an order ready for pickup!'
      }).then((message) => console.log(message.sid, "SMS SENT!"));
  });
  return router;
}




