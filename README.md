# Angie & Frank's - Order Pizza Online

This is a full stack web application that allows customers to place pizza orders online and receive an SMS using the Twillio API when the order is ready. The owner will get a notification via SMS when the order is placed. A group midterm project, and my responsibility was creating the server and database back-end work.

## ScreenShots
!["Gif of index page"](https://github.com/linyh0207/Angie-Frank-s-Order-Pizza-Online/blob/master/docs/indexPage.png?raw=true)
!["Screenshots of customer order page"](https://github.com/linyh0207/Angie-Frank-s-Order-Pizza-Online/blob/master/docs/customerOrderPage.png?raw=true)
!["Screenshots of owner page"](https://github.com/linyh0207/Angie-Frank-s-Order-Pizza-Online/blob/master/docs/ownerPage.png?raw=true)

## Getting Started
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies
- Node 5.10.x or above
- NPM 3.8.x or above
- Body Parser
- Bootstrap
- EJS
- Express
- Knex
- PG
- Twilio

