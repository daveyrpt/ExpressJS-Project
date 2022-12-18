const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/express_development')
.then(() => console.log('Successfully connected to Database'))
.catch((err) => console.log(err));