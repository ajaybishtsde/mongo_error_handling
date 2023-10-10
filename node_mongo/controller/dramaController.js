const Drama = require("../modal/drama");
const createAsync = require("../utils/createAsync");

module.exports = {
  addDrama: createAsync(async (req, res) => {
    console.log(req.body, "rb");
    const newDrama = new Drama(req.body);
    const result = await newDrama.save();
    console.log(result);
    if (result) {
      return res.json({
        status: true,
        message: "Added",
      });
    }
  }),
  getDramas: createAsync(async (req, res) => {
    const result = await Drama.find().populate({
      path: "users",
      select: "-_id -password -__v",
      options: {
        sort: "firstName",
        // skip: parseInt(req.params.numberLoaded),
        limit: 4,
      },
    });
    return (
      result &&
      res.json({
        status: true,
        data: result,
      })
    );
  }),
};
