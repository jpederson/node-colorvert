

var rgb_to_cmyk = require( "./cmyk" ),
	rgb_to_xyz  = require( "./xyz" ),
	rgb_to_lab  = require( "./lab" ),
	rgb_to_hex  = require( "./hex" ),
	rgb_to_hsl  = require( "./hsl" ),
	rgb_to_hsv  = require( "./hsv" );


// convert HSV to all other color formats
module.exports = function( r, g, b, callback ){

	// convert to CMYK using transicc
	rgb_to_cmyk( r, g, b, function( cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( r, g, b, function( xyz ){

			// convert to Lab using transicc
			rgb_to_lab( r, g, b, function( lab ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": rgb_to_hex( r, g, b ),
					"hsl": rgb_to_hsl( r, g, b ),
					"hsv": rgb_to_hsv( r, g, b ),
					"rgb": {
						"r": r,
						"g": g,
						"b": b
					},
					"xyz": xyz
				};

				// send the response to the browser
				callback( response );

			});

		});

	});

};

