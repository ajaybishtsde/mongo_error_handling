const School = require("../school");

module.exports = {
  addSchool: async (req, res) => {
    try {
      const schoolsData = new School(req.body);
      const result = await schoolsData.save();
      return res.json(result);
    } catch (error) {
      res.json(error);
    }
  },
};
