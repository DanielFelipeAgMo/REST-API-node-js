const {Router} = require('express');
const router = Router();

router.get('/',(req, res) => {
    res.json({"Title": "Hola Mundo"});
})

router.get('/prueba',(req, res) => {
    const data = {
        "name": "Daniel",
        "lastname": "Agudelo",
        "website" : "dfamsoluciones.com"
    }
    res.json(data);
})

module.exports = router;