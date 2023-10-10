const { addSchool } = require("../controller/schoolController");

const schoolRoutes = require("express").Router();
schoolRoutes.post("/", addSchool);
module.exports = schoolRoutes;
