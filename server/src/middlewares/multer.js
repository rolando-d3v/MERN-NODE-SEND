const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    let extension = path.extname(file.originalname).toLocaleLowerCase();
    cb(null, "file-" + shortid.generate() + extension);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1000 * 4000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    } else {
      cb("Error: archivo no valido");
    }
  },
});

module.exports = upload;
