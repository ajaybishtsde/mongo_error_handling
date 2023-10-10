const { addDrama, getDramas } = require("../controller/dramaController");
const verifyToken = require("../middleware/verifyToken");

const dramaRoute = require("express").Router();
dramaRoute.post("/", addDrama);
dramaRoute.get("/", verifyToken, getDramas);
module.exports = dramaRoute;
