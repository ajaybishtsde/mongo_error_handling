const express = require("express");
require("./mongo_connection");
const studentRoutes = require("./routes/studentRoutes.js");
const subjectRoutes = require("./routes/subjectsRoutes");
const app = express();
const globalErrorHandler = require("./controller/errorController");
const bodyParser = require("body-parser");
const schoolRoutes = require("./routes/schoolRoute");
const userRoutes = require("./routes/user");
const jobsRoutes = require("./routes/Jobs");
const AppError = require("./utils/appError");
const dramaRoute = require("./routes/dramaRoutes");
app.use(bodyParser.json());
const PORT = "3001";
app.use("/student", studentRoutes);
app.use("/subject", subjectRoutes);
app.use("/school", schoolRoutes);
app.use("/user", userRoutes);
app.use("/jobs", jobsRoutes);
app.use("/drama", dramaRoute);
app.all("*", (req, res, next) => {
  next(new AppError(`Requested url ${req.originalUrl} is not found`, 401));
});
app.use(globalErrorHandler);
app.listen(PORT, () => {
  console.log(`app is listening at port http://localhost:${PORT}`);
});
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
});
