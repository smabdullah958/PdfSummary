let express = require("express");
let SummaryRoute = express.Router();
let SummaryController = require("../Controller/PDFSummary/GenerateSummary.js");

SummaryRoute.post("/", SummaryController);

module.exports = SummaryRoute;
