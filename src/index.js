const express = require('express');
const groceriesRoute = require('./routes/groceries')
const marketsRoute = require('./routes/markets')

const app = express();
const PORT = 3001;


// register middleware. Middleware just a normal function 
app.use(express.json())
app.use(function(req, res, next) {
    console.log(req.method)
    next()
})

// register router start from /api depends one first parameter
app.use('/api/groceries', groceriesRoute);
app.use('/api/markets', marketsRoute);

// listen port
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});

