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
	var email = $('form#sign-up #user-email').val(),
		password = $('form#sign-up #password').val();

});

// Sign up
$('form#sign-up').on('submit', function(){
	// Get information from inputs
	var firstName = $('form#sign-up #first-name').val(),
		lastName = $('form#sign-up #last-name').val(),
		major = $('form#sign-up #major').val() || '',
		email = $('form#sign-up #user-email').val(),
		password = $('form#sign-up #password').val();

});