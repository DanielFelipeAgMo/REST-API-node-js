const { Router } = require('express');
const router = Router();

//const fetch = require('node-fetch');

//async
router.get('/', (req, res) => {
   // const response = await fetch('https://jsonplaceholder.typicode.com/users');//aca se enruta la otra api
   // const usuarios = await response.json();
    console.log(usuarios);
   // res.json(usuarios);
   res.send('usuarios');
})

module.exports = router;