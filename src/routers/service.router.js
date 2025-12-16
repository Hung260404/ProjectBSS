const express = require("express");
const controller = require("../controllers/service.controller");
const {
  verifyToken,
  requireProvider,
} = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", verifyToken, requireProvider, controller.create);
router.get(
  "/provider/me",
  verifyToken,
  requireProvider,
  controller.getMyServices
);
router.get("/:id/public", controller.getPublicDetail);
router.put("/:id", verifyToken, requireProvider, controller.update);
router.delete("/:id", verifyToken, requireProvider, controller.remove);

module.exports = router;
