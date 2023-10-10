const jobs = require("../controller/jobs");

const jobsRoutes = require("express").Router();
jobsRoutes.post("/", jobs.addJob);
module.exports = jobsRoutes;
