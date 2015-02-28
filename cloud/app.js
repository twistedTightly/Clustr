
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body


// Called when sign up form submitted from main page
app.post('/home', function(req, res) {
	res.render('home', { name: req.body.firstname });
});

// Called when log in form submitted from main page
app.get('/home', function(req, res) {
	// Create a Parse query to get the user's name
	var query = new Parse.Query(Parse.User);
	query.equalTo('username', req.query.email);

	// Execute the query
	var firstname = req.query.email;
	query.find({
		success: function(results) {
			console.error('results', results);
			if (results) {
				firstname = results[0].attributes.firstname;
				console.error('first name', firstname);
				res.render('home', { name: firstname });
			}
		},
		error: function(error) {
			console.error('error', error.message);
			res.render('home', { name: firstname });
		}
	});
});

// Attach the Express app to Cloud Code.
app.listen();
