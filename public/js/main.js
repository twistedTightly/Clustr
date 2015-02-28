/* main.js
 *
 * Handles the log in and sign up from the landing page
 *
 */

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Must call Parse.initialize before trying to run any code from the Parse Javascript SDK
Parse.initialize("APP-KEY", "JAVASCRIPT-ID");

// Log in
$('form#log-in').on('submit', function(){
	// Get information from inputs
	var email = $('form#log-in #user-email').val(),
		password = $('form#log-in #password').val();

	Parse.User.logIn(email, password, {
		success: function(user) {
			document.logIn.submit();
		},
		error: function(user, error) {
			// The login failed. Check error to see why.
			alert('Uh oh! ' + error.message + ' (' + error.code + ')');
			document.logIn.submit();
		}
	});
	return false;
});

// Sign up
$('form#sign-up').on('submit', function(){
	// Get information from inputs
	var firstName = $('form#sign-up #first-name').val(),
		lastName = $('form#sign-up #last-name').val(),
		major = $('form#sign-up #major').val() || '',
		email = $('form#sign-up #user-email').val(),
		password = $('form#sign-up #password').val();
	
	var user = new Parse.User();
	user.set("username", email);
	user.set("firstname", firstName);
	user.set("lastname", lastName);
	user.set("major", major);
	user.set("password", password);
	user.set("role", "student");
	  
	user.signUp(null, {
	  success: function(user) {
	  	document.signIn.submit();
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
	return false;
});