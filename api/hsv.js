

// require all conversion functions
var cvert = require( "../colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){
		

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		h = parseFloat( url_parts[1] ),
		s = parseFloat( url_parts[2] ),
		v = parseFloat( url_parts[3] );
	

	// convert to RGB first
	var rgb = cvert.hsv_to_rgb( h, s, v );


	// convert to CMYK using transicc
	cvert.rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

		// convert to XYZ using transicc
		cvert.rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

			// convert to Lab using transicc
			cvert.rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": cvert.rgb_to_hex( rgb.r, rgb.g, rgb.b ),
					"hsl": cvert.rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
					"hsv": {
						"h": h,
						"s": s,
						"v": v
					},
					"rgb": rgb,
					"xyz": xyz
				};

				// send the response to the browser
				res.send( JSON.stringify( response, null, 4 ) );

			});

		});

	});


};

