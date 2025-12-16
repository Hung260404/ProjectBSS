const service = require("../services/schedule.service");
const scheduleService = require("../services/schedule.service");
exports.getConfig = async (req, res, next) => {
  try {
    const data = await service.get(req.user.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.setConfig = async (req, res, next) => {
  try {
    const data = await service.set(req.user.id, req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
exports.getConfig = async (req, res, next) => {
  try {
    const data = await scheduleService.get(req.user.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.setConfig = async (req, res, next) => {
  try {
    await scheduleService.set(req.user.id, req.body);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
exports.blockDate = async (req, res, next) => {
  try {
    const data = await scheduleService.block(req.user.id, req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
