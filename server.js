const express = require('express');
const header = require('./routes/header')

const app = express();

const port = process.env.PORT || 5000;

app.use('/', header)

app.listen(port, () => {
    console.log('Server started on port '+ port);
})