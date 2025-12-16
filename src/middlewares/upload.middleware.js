const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/services",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadServiceImage = multer({ storage });

module.exports = { uploadServiceImage };
