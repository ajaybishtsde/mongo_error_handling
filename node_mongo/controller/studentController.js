const json = require("body-parser/lib/types/json");
const studentModal = require("../schema");
const Subject = require("../subjects");
module.exports = {
  addStudents: async (req, res) => {
    console.log(req.body);
    const { name, city, isPassed } = req.body;
    try {
      const studentsData = new studentModal(req.body);

      const result = await studentsData.save();
      console.log(result, "result");
      if (result) {
        return res.json({ status: true, message: "student saved succesfully" });
      } else {
        return res.json({ status: false, message: "error saving students" });
      }
    } catch (error) {
      return res.send(error.message);
    }
  },
  getStudents: async (req, res) => {
    try {
      const result = await studentModal.find().populate({
        path: "subjectsId",

        populate: {
          path: "schoolId",
        },
      });

      if (result) {
        res.json({ status: true, data: result });
      } else {
        res.json({ status: false, message: "did not matched any data" });
      }
    } catch (error) {
      return res.json(error);
    }
  },
};
