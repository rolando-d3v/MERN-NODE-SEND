const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const fs = require("fs");

//_* SUBIR ARCHIVOS
exports.subirArchivo = async (req, res) => {
  //configuracion de multer
  const upload = multer({
    limits: { fileSize: req.usuario ? 1000 * 9000 : 1000 * 2000 },
    storage: multer.diskStorage({
      destination: path.join(__dirname, "../../public/uploads"),
      filename: (req, file, cb) => {
        let extension = path.extname(file.originalname).toLocaleLowerCase();
        cb(null, "File-" + shortid.generate() + extension);
      },
    }),
  });

  //instanciador de nombre de campo
  const ulploadx = upload.single("archivo");

  ulploadx(req, res, async (error) => {
    console.log(req.file);
    if (!error) {
      res.json({ archivo: req.file.filename });
    }
  });
};




//_* REMOVE ARCHIVO  nota: se llama del router get enlace
exports.eliminarArchivo = async (req, res) => {
  try {
    fs.unlinkSync(path.resolve(`./src/public/uploads/${req.archivo}`))
    console.log("archivo eliminado");
  } catch (err) {
    console.log(err);
  }
};
