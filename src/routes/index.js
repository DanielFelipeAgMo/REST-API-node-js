const {Router} = require('express');
const router = Router();

router.get('/',(req, res) => {
    res.json({"Title": "Hola Mundo están dormidos"});
})



router.get('/prueba',(req, res) => {
    const data = {
        "name": "Daniel",
        "lastname": "Agudelo",
        "website" : "danielestadespiertoyhablando.com"
    }
    res.json(data);
})

module.exports = router;