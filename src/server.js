const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
const routes = requireDir("./routes");

app.use(express.json());
app.use(cors());
app.use(routes.user);
app.use(routes.pizza);

app.listen(3333, () => {
  console.log("info", "Server running ✔");
});
