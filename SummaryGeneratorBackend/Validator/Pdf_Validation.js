let { body } = require("express-validator");

let validation = [
  body("Language")
    .notEmpty()
    .withMessage("All fields are required")
    .default("English"),
  body("Length")
    .notEmpty()
    .withMessage("All fields are reequired")
    .default("Short"),
  body("Format")
    .notEmpty()
    .withMessage("All fields are required")
    .default("bullet"),
];

module.exports = validation;
