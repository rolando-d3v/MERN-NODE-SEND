const {Router} = require('express');

const router = Router()
const {getUsuarios, createdUsuario } = require('./usuarioController')

router.get('/usuario', getUsuarios)
router.post('/usuario', createdUsuario)


module.exports = router