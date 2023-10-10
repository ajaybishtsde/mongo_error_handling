const Jobs = require("../modal/jobs");

module.exports = {
  addJob: async (req, res) => {
    try {
      const newJob = await Jobs(req.body);
      const result = newJob.save();
      if (result) {
        return res.json({
          status: true,
          message: "job is created",
        });
      }
    } catch (error) {
      return res.json({
        status: "false",
        message: error.message,
      });
    }
  },
};
