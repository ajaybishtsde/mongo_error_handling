const { addSubjects, getSubject } = require("../controller/subjectController");

const routes = require("express").Router();
routes.post("/", addSubjects);
routes.post("/get", getSubject);
module.exports = routes;
