

var rgb_to_cmyk  = require( "./cmyk" ),
	rgb_to_xyz   = require( "./xyz" ),
	rgb_to_lab   = require( "./lab" ),
	rgb_to_hex   = require( "./hex" ),
	rgb_to_hsl   = require( "./hsl" ),
	rgb_to_hsv   = require( "./hsv" ),
	hex_invert   = require( "../hex/invert" ),
	hex_readable = require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( r, g, b, callback ){

	if ( isNaN( r ) || isNaN( g ) || isNaN( b ) ) {
		return callback( "ERROR: Please provide valid R, G, and B values." );
	}

	// convert to CMYK using transicc
	rgb_to_cmyk( r, g, b, function( err, cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( r, g, b, function( err, xyz ){

			// convert to Lab using transicc
			rgb_to_lab( r, g, b, function( err, lab ){

				// grab the hex
				var hex = rgb_to_hex( r, g, b );

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
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
				callback( err, response );

			});

		});

	});

};

