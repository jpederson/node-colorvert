

// require all conversion functions
var cvert = require( "../colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		c = url_parts[1],
		m = url_parts[2],
		y = url_parts[3],
		k = url_parts[4];
	

	// convert to lab using transicc
	cvert.cmyk_to_all( c, m, y, k, function( response ){

		// send the response to the browser
		res.send( JSON.stringify( response, null, 4 ) );

	});

};

