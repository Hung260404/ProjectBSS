const service = require("../services/service.service");

exports.create = async (req, res, next) => {
  try {
    const data = await service.create(req.user.id, req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.getMyServices = async (req, res, next) => {
  try {
    const data = await service.getByProvider(req.user.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.getPublicDetail = async (req, res, next) => {
  try {
    const data = await service.getPublic(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const data = await service.update(req.user.id, req.params.id, req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await service.remove(req.user.id, req.params.id);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
