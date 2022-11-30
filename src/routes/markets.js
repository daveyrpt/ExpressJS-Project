const { Router } = require('express');

const router = Router();

module.exports = router;

const shop = [
    {
        shopName: 'Giant'
    },
    {
        shopName: 'Servay'
    },
    {
        shopName: 'Dragon'
    },
];

router.get('', function(req, res) {
    res.send(shop)
});