const express = require('express')
const router = express.Router()


router.get('/', function (req, res) {
    res.sendFile('index.html', { root: './public' })
});


/*
route.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

route.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

route.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})
route.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

route.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

*/
module.exports = router;