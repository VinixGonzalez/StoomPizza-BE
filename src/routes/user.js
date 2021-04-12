const express = require("express");
const routes = express.Router();

const controller = require("../controllers/userController");

routes.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const data = await controller.getUserData(userId);

  return res.status(200).send(data);
});

module.exports = routes;
