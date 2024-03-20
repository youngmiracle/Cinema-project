const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    console.log('main')
})

router.get('/about', (req,res) => {
    res.sendFile()
})

router.get('/price', (req,res) => {
    res.sendFile()
})

router.get('/contacts', (req,res) => {
    res.render('contacts')
})
router.get('/review', (req,res) => {
    res.sendFile()
})

module.exports = router;