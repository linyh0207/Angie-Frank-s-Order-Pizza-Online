"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();
const twilio      = require("twilio");
const accountSid  = 'ACf289a1a36a762b5ba5340d95c2c01c70';
const authToken   = 'c36a648b2a9925367995cf60121d06ec';
const client      = new twilio (accountSid, authToken);


const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Customer Page
app.get("/customer/abc", (req, res) => {
  res.render("customer");
});

// Owner Page
app.get("/owner", (req, res) => {
  res.render("vendor");
});

// For click Checkout button
// app.get("/checkout", (req, res) => {

// });


const checkoutRoutes = require("./routes/checkout");
app.use("/customer/checkout", checkoutRoutes(knex));

const addRoutes = require("./routes/cart");
app.use("/customer/cart", addRoutes(knex));

app.get('/ownermes', function (req, res) {
    client.messages.create({
      to: '+17789961608',
      from: '+16138016248',
      body: 'You have an order ready to be prepared!'
    }).then((message) => console.log(message.sid, "SMS SENT!"));
});

app.get('/customermes', function (req, res) {
  client.messages.create({
    to: '+17789961608',
    from: '+16138016248',
    body: 'You have an order ready for pickup!'
  }).then((message) => console.log(message.sid, "SMS SENT!"));
});
// +16476078485


const menuRoutes = require("./routes/menu");
app.use("/customer/menu", menuRoutes(knex));

const ownerRoutes = require("./routes/owner");
app.use("/owner/order", ownerRoutes(knex));

const completeRoutes = require("./routes/complete");
app.use("/owner/complete", completeRoutes(knex));

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
