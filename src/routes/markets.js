const { Router } = require('express');

const router = Router();

module.exports = router;

const shop = [
    {
        id: 1,
        shopName: 'Giant',
        miles: 0.6
    },
    {
        id: 2,
        shopName: 'Servay',
        miles: 1.0
    },
    {
        id: 3,
        shopName: 'Dragon',
        miles: 1.1
    },
];

router.use(function(request, respond, next) {
    if(request.session.user) {
        next()
    } else {
        respond.sendStatus(401)
    }
});

// retrieve specific resources using query parameter using sort or filter
router.get('', function(request, respond) {
    const { miles } = request.query;
    const parseMiles = parseInt(miles);
    if(!isNaN(parseMiles)) {
        const filterStores = shop.filter((target) => target.miles <= parseMiles)
        respond.send(filterStores)
    } else {
        respond.send(shop)
    }
})