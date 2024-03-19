const express = require('express');
const cors = require('cors');
// const header = require('./routes/header')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use('/', require('./routes/header'))

app.listen(port, () => {
    console.log('Server started on port '+ port);
})