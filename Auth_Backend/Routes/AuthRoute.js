let express = require("express");
let App = express.Router();
let SignUpAuth = require("../Controller/Auth/SignUpAuth");
let validation = require("../Validator/AuthValidate");
let LogInAuth = require("../Controller/Auth/LogInAuth");
let LogOut = require("../Controller/Auth/LogOutAuth");
//it is used to check the user is login or not bro
let CheckLogIn = require("../Controller/Auth/CheckLogIn");

App.post("/SignUpAuth", validation, SignUpAuth);
App.post("/LogInAuth", LogInAuth);
App.post("/LogOutAuth", LogOut);
App.get("/checkLogin", CheckLogIn);
module.exports = App;
