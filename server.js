var express = require('express');
var path = require('path');

var app = express();

var PORT = 8888;

app.listen(PORT, function() {
    console.log('Server started in http://localhost:' + PORT);
})