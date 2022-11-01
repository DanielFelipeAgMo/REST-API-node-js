const { Router} = require('express');
const router = Router();

const personas = require('../bd/bd.json');
//console.log(personas)
const _ = require('underscore');


router.get('/personas',(req, res) => {
    res.json(personas);
})

router.post('/personas',(req, res) => {
    console.log(req.body)
    const{ name, lastname, bornyear, gender, tall, age, profession}=req.body;
    if ( name && lastname && bornyear && gender && tall && age && profession) {
        const id = personas.length + 1;
        const newPerson = {...req.body, id}
        personas.push(newPerson);
        res.json(personas)
    }
    else{
        res.send("error en la petición");
    }
    
})

router.delete('/:id',(req, res) => {
    const {id} = req.params;
    _.each(personas, (persona, i)=>{
        if(persona.id == id){
            personas.splice(i, 1);
        }
    })   
    //console.log(req.params);
    res.send(personas);
})

router.put('/:id',(req, res) => {
    const {id} = req.params;
    const {name, lastname, bornyear, gender, tall, age, profession} = req.body;
    if ( name && lastname && bornyear && gender && tall && age && profession){
        _.each(personas, (persona, i)=>{
            if (persona.id == id){
                persona.name = name;
                persona.lastname = lastname;
                persona.bornyear = bornyear;
                persona.gender = gender;
                persona.tall = tall;
                persona.age = age;
                persona.profession = profession;
            }
        });
        res.json(personas)
    } else{
        res.status(500).json({error: "Ocurrió un error al actualizar el objeto"})
    }
      
    //console.log(req.params);
    res.send(personas);
})



module.exports = router;