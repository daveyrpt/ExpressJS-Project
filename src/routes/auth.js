const { Router } = require('express');
const User = require('../database/Schemas/User')
const { hashPassword, comparePassword } = require('../utils/helpers')
const passport = require('passport')

const router = Router();

/* router.post('/login', async function(request, respond) {
    const { email, password } = request.body
    const userDB = await User.findOne({ email })
    const isValid = comparePassword(password, userDB.password)

    if(!email || !password) return respond.sendStatus(400)
    if(!userDB) return respond.sendStatus(401)
    if(isValid) {
        console.log('Authenticate Successfully')
        request.session.user = userDB
        respond.sendStatus(200)
    } else {
        console.log('Authenticate Failed')
        respond.sendStatus(401)
    }


/*     if(email && password) {

        if(request.session.user) {
            console.log('Already logged in')
            respond.send(request.session.user)
        } else {
            request.session.user = { username }
            respond.send(request.session)
        }
    } else {
        respond.sendStatus(401)
    } 
}); */

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('Beta logged in')
    res.sendStatus(200)
})

router.post('/register', async (request, respond) => {
    const { email } = request.body
    const userDB = await User.findOne({ $or: [{ email }] })

    if(userDB) {
        respond.status(400).send({ msg: 'User already exist!' });
    } else {
        const password = hashPassword(request.body.password)
        console.log(password)
        const newUser = await User.create({ password, email })
        respond.sendStatus(201)
    }
})

module.exports = router;