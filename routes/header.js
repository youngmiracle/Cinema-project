const express = require('express');

const route = express.Router();

route.get('/', (req,res) => {
    res.sendFile()
})

route.get('/about', (req,res) => {
    res.sendFile()
})

route.get('/price', (req,res) => {
    res.sendFile()
})

route.get('/contacts', (req,res) => {
    res.sendFile()
})
route.get('/review', (req,res) => {
    res.sendFile()
})