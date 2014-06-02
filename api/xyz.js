

// require all conversion functions
var cvert = require( "../colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		x = url_parts[1],
		y = url_parts[2],
		z = url_parts[3];
	

	// convert to lab using transicc
	cvert.xyz_to_all( x, y, z, function( response ){

		// send the response to the browser
		res.send( JSON.stringify( response, null, 4 ) );

	});

};

