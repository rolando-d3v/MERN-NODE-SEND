const {Router} = require('express');


const {verificaToken} = require('../../middlewares/auth')

const router = Router()
const {subirArchivo } = require('./uploadController')

router.post('/upload',verificaToken, subirArchivo )



module.exports = router