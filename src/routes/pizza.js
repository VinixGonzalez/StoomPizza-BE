const express = require("express");
const routes = express.Router();

const controller = require("../controllers/pizzaController");

routes.get("/pizza/restaurantData", async (req, res) => {
  const data = await controller.getRestaurantData();

  return res.status(200).send(data);
});

module.exports = routes;
