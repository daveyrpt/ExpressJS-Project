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

router.use(function(request, respond, next) {
    if(request.session.user) {
        next()
    } else {
        respond.sendStatus(401)
    }
});

// Cookies 
router.get('/', function(request, respond) {
    //respond.cookie('visit', true, {maxAge: 10000})
    respond.send(groceryList)
});

// retrieve resources
router.get('/', function(request, respond) {
    respond.send(groceryList)
});

// Client get something 
// Server give specific resources using 'route parameter' to client
router.get('/:item', function(request, respond) {
    console.log(request.cookies);
    const {item} = request.params
    const groceryItem = groceryList.find((target) => target.item === item)
    respond.send(groceryItem)
});

// Client post something 
// Server receive what the client post resources and tell the client that the process is success
router.post('/', function(request, respond) {
    groceryList.push(request.body)
    respond.sendStatus(201) // 201 indicate success
}); 

router.get('/shopping/cart', (request, respond) => {
    const { cart } = request.session

    if(cart) {
        respond.send(cart)
    } else {
        respond.send('Empty cart')
    }
});

router.post('/shopping/cart/item', (request, respond) => {
    const { item, quantity } = request.body
    const cartItem = { item, quantity }
    const { cart } = request.session

    /* console.log(request.session) result :-

    Session {
        cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
    } 
    */

    if(cart) {
        request.session.cart.items.push(cartItem)
    } else {
        request.session.cart = { items: [cartItem] }
    }
    respond.sendStatus(201)
});

module.exports = router;