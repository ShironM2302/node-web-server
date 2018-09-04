const express = require('express');
var app = express();

//route set up
app.get('./', (req,res) => {
    res.send('hello');
})

//port to listen too
app.listen(3000);