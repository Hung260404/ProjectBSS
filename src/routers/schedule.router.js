const express = require("express");
const controller = require("../controllers/schedule.controller");
const {
  verifyToken,
  requireProvider,
} = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/config", verifyToken, requireProvider, controller.getConfig);
router.post("/config", verifyToken, requireProvider, controller.setConfig);
router.post("/block", verifyToken, requireProvider, controller.blockDate);

module.exports = router;
