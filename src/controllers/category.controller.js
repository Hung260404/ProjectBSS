const service = require("../services/category.service");

exports.getAll = async (req, res, next) => {
  try {
    const data = await service.getAll();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
