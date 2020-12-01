const {Router} = require('express');

const upload = require('../middlewares/multer')
const {verificaToken} = require('../middlewares/auth')

const router = Router()
const {subirArchivo, eliminarArchivo } = require('../controllers/uploadController')

router.post('/upload', upload.single('archivo'), subirArchivo )
router.delete('/upload/:idFile', eliminarArchivo )


module.exports = router