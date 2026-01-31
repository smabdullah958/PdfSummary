let express = require("express");
let SummaryRoute = express.Router();
let SummaryController = require("../Controller/PDFSummary/GenerateSummary.js");
let AuthMiddleware = require("../Middleware/AuthMiddleware.js");

SummaryRoute.post("/", AuthMiddleware, SummaryController);

module.exports = SummaryRoute;
