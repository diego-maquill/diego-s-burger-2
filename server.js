// Solution 2: Customer Relations
// ===========================================

// Step 1: Created a Customer model in ./models/customer.js
// Step 2: Updated the Burger model to have a hasOne(models.Customer) relation
// Step 3: Updated the handlebars to display a customers name if there's a 'Customers' property on the Burger
// Step 4: Updated queries in burgerController for updating a burger to add the CustomerId
// Step 5: Updated findAll query  in burger_controller for burgers to "include" the customer
// Step 6: Updated findAll query in burger_controller to order returned burgers by burger_name.

// Create a server.js file.

// 5. Install the Handlebars npm package: `npm install express-handlebars`.

// 6. Install the body-parser npm package: `npm install body-parser`.

// 7. Install MySQL npm package: `npm install mysql`.

// 8. Require the following npm packages inside of the server.js file:
//    * express
//    * body-parser
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static("public"));
var db = require("./models");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app)

// Start our server so that it can begin listening to client requests.
// it seems that the .sync is force dropping the table on start according to this SO: https://stackoverflow.com/questions/48077854/how-to-stop-sequelize-to-drop-existing-table

// db.sequelize.sync({ force: true }).then(function() {

db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});