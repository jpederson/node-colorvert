

// require all conversion functions
var cvert = require( "../colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){
		

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		l = parseFloat( url_parts[1] ),
		a = parseFloat( url_parts[2] ),
		b = parseFloat( url_parts[3] );
	

	// convert to rgb using transicc
	cvert.lab_to_rgb( l, a, b, function( rgb ){

		// convert to lab using transicc
		cvert.lab_to_cmyk( l, a, b, function( cmyk ){

			// build the response object
			var response = {
				"lab": {
					"l": l,
					"a": a,
					"b": b
				},
				"cmyk": cmyk,
				"rgb": rgb,
				"hex": cvert.rgb_to_hex( rgb.r, rgb.g, rgb.b )
			};

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		});

	});


};

