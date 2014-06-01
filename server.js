

var express = require('express'),
	app = express(),
	
	// colorspaces for math-based conversions in node
	colorspaces = require('colorspaces');



// handle homepage requests
app.use( express.static( __dirname + '/public' ) );


// cmyk API endpoint.
app.get('/cmyk/*', require( "./endpoint/cmyk" ) );


// listen for requests
app.listen( 8080 );

