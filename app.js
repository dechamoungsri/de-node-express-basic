// import module
var express = require('express');

// intitialise module
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// Create a route handle for the home path
app.get('/', function(req,res){
	// Send text back
	//res.send('Hello World');

	res.render('index', {
		title: 'My Page'
	});
});

var port = process.env.PORT || 3000;

app.listen(3000);
console.log('Server listening at port ' + port);