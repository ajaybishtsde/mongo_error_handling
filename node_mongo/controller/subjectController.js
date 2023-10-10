const Subject = require("../subjects");
module.exports = {
  addSubjects: async (req, res) => {
    // const { userId, subject } = req.body;
    try {
      const subjectData = new Subject(req.body);
      const result = await subjectData.save();
      if (result)
        return res.json({ status: true, message: "added succesfully" });
      else {
        return res.json({ status: false, message: "failed to add" });
      }
    } catch (error) {
      res.json({ error });
    }
  },
  getSubject: async (req, res) => {
    const { sId, uId } = req.body;
    try {
      const result = await Subject.find().populate({
        path: "userId",

        select: ["name"],
        options: {
          sort: { name: -1 },
        },
      });
      res.json({ status: true, data: result });
    } catch (error) {
      res.json({ error });
    }
  },
};
