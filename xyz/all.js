

var xyz_to_cmyk  = require( "./cmyk" ),
	xyz_to_lab   = require( "./lab" ),
	xyz_to_rgb   = require( "./rgb" ),
	rgb_to_hex   = require( "../rgb/hex" ),
	rgb_to_hsl   = require( "../rgb/hsl" ),
	rgb_to_hsv   = require( "../rgb/hsv" ),
	hex_invert   = require( "../hex/invert" ),
	hex_readable = require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( x, y, z, callback ){

	if ( isNaN( x ) || isNaN( y ) || isNaN( z ) ) {
		callback( "ERROR: Please provide valid X, Y, and Z values." );
		return;
	}

	// convert to CMYK using transicc
	xyz_to_cmyk( x, y, z, function( err, cmyk ){

		// convert to Lab using transicc
		xyz_to_lab( x, y, z, function( err, lab ){

			// convert to RGB using transicc
			xyz_to_rgb( x, y, z, function( err, rgb ){

				// grab the hex value
				var hex = rgb_to_hex( rgb.r, rgb.g, rgb.b );

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
					"hsl": rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
					"hsv": rgb_to_hsv( rgb.r, rgb.g, rgb.b ),
					"rgb": rgb,
					"xyz": {
						"x": x,
						"y": y,
						"z": z
					}
				};

				// send the response to the browser
				callback( err, response );

			});

		});

	});

};

