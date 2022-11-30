const { Router } = require('express')

const router = Router();

const groceryList = [
    {
        item: 'milks',
        quantity: '2',
    },
    {
        item: 'cereal',
        quantity: '1',
    },
];

// retrieve resources
router.get('/', function(req, res) {
    res.send(groceryList)
});

// retrieve specific resources
router.get('/:item', function(req, res) {
    const {item} = req.params
    const groceryItem = groceryList.find((g) => g.item === item)
    res.send(groceryItem)
});

// create resources
router.post('/', function(req, res) {
    console.log(req.body)
    groceryList.push(req.body)
    res.sendStatus(201) // 201 indicate success
}); 

module.exports = router;