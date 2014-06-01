

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
	

	// convert to rgb using transicc
	cvert.cmyk_to_lab( c, m, y, k, function( lab ){

		// convert to lab using transicc
		cvert.cmyk_to_rgb( c, m, y, k, function( rgb ){

			// build the response object
			var response = {
				"cmyk": {
					"c": c,
					"m": m,
					"y": y,
					"k": k
				},
				"lab": lab,
				"rgb": rgb,
				"hex": cvert.rgb_to_hex( rgb.r, rgb.g, rgb.b ),
				"hsv": cvert.rgb_to_hsv( rgb.r, rgb.g, rgb.b )
			};

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		});

	});

};

