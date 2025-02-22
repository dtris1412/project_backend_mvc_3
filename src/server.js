const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const conection = require("./config/database");
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
//config request.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
configViewEngine(app);
app.use("/", webRoutes);
conection.query(`select * from Users`, function (err, result, fields) {
  console.log("check result>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
