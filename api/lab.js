

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
	cvert.lab_to_cmyk( l, a, b, function( cmyk ){

		// convert to lab using transicc
		cvert.lab_to_xyz( l, a, b, function( xyz ){

			// convert to lab using transicc
			cvert.lab_to_rgb( l, a, b, function( rgb ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": {
						"l": l,
						"a": a,
						"b": b
					},
					"hex": cvert.rgb_to_hex( rgb.r, rgb.g, rgb.b ),
					"hsl": cvert.rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
					"hsv": cvert.rgb_to_hsv( rgb.r, rgb.g, rgb.b ),
					"rgb": rgb,
					"xyz": xyz
				};

				// send the response to the browser
				res.send( JSON.stringify( response, null, 4 ) );

			});

		});

	});


};

