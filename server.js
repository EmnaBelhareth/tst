var express = require('express');
var app = express();
var server = app.listen(4000, function(){
    console.log("Express server has started on port 4000")
});

app.use('/static', express.static(__dirname + '/public/dynamoTable'));

app.get('/', function(req, res){
    res.send('Hello World');
});