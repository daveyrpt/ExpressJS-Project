const { Router } = require('express');

const router = Router();

router.post('/login', function(request, respond) {
    const { username, password } = request.body

    if(username && password) {

        if(request.session.user) {
            respond.send(request.session.user)
        } else {
            request.session.user = { username }
            respond.send(request.session)
        }
    } else {
        respond.sendStatus(401)
    }
});

module.exports = router;