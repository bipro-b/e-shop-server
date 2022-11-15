const express = require("express");
const app = express();
const cors = require("cors");

// middle wares
app.use(express.json());
app.use(cors());

const productRoute = require("./routes/product.route");

app.use("/api/v1/product", productRoute);

module.exports = app;
