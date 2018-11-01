// Dependencies
var express = require('express');


// Express Configuration
var app = express();
var PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());


// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// Listener
app.listen(PORT, function() {
    console.log('Server started in http://localhost:' + PORT);
});