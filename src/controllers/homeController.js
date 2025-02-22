const conection = require("../config/database");

const getHomepage = (req, res) => {
  res.render("home.ejs");
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  conection.query(
    `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    [email, name, city],
    function (err, result) {
      console.log("email: ", email, "name: ", name, "city: ", city);
      res.send("user is created");
    }
  );
};
module.exports = {
  getHomepage,
  getABC,
  postCreateUser,
};
