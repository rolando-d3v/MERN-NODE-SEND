

exports.nuevoEnlace = async (req, res) => {
    try {
        res.json({message: 'nuevo enlace'})
    } catch (err) {
        res.json(err)
    }

}