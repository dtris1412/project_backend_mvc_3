const express = require("express");
const path = require("path");
//config
const configViewEngine = (app) => {
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //static
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
