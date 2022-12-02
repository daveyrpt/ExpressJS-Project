const express = require('express');
const cookieParser = require('cookie-parser')
const session = require('express-session')

const groceriesRoute = require('./routes/groceries')
const marketsRoute = require('./routes/markets')
const authRouter = require('./routes/auth')

const app = express();
const PORT = 3001;


// register middleware. Middleware just a normal function 
app.use(express.json());
app.use(cookieParser());
app.use(session({
        secret: 'PADSSSAD',
        resave: false,
        saveUninitialized: false,
    })
)

/* app.use(function(request, respond, next) {
    console.log(request.method)
    next()
}); */


// register router start from /api depends one first parameter
app.use('/api/groceries', groceriesRoute);
app.use('/api/markets', marketsRoute);
app.use('/api/auth', authRouter);

// listen port
app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
});

