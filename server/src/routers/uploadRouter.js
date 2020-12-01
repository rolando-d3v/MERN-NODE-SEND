const {Router} = require('express');


const {verificaToken} = require('../middlewares/auth')

const router = Router()
const {subirArchivo, eliminarArchivo } = require('../controllers/uploadController')

router.post('/upload',verificaToken, subirArchivo )
router.delete('/upload/:idFile', eliminarArchivo )


module.exports = router