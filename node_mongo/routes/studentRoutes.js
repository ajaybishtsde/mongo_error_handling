const routes = require("express").Router();
const { addStudents, getStudents } = require("../controller/studentController");

routes.post("/", addStudents);
routes.get("/", getStudents);
module.exports = routes;
