

// require all conversion functions
var cvert = require( "../colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		hex = url_parts[1];
	

	// convert to rgb using transicc
	cvert.hex_to_all( hex, function( response ){

		// send the response to the browser
		res.send( JSON.stringify( response, null, 4 ) );

	});

};

