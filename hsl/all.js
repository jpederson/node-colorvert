

var hsl_to_rgb   = require( "./rgb" ),
	rgb_to_cmyk  = require( "../rgb/cmyk" ),
	rgb_to_xyz   = require( "../rgb/xyz" ),
	rgb_to_lab   = require( "../rgb/lab" ),
	rgb_to_hex   = require( "../rgb/hex" ),
	rgb_to_hsv   = require( "../rgb/hsv" ),
	hex_invert   = require( "../hex/invert" ),
	hex_readable = require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( h, s, l, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( l ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and L values.' ), null );
	}

	// convert to RGB first
	var rgb = hsl_to_rgb( h, s, l );

	// convert to CMYK using transicc
	rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( err, cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( err, xyz ){

			// convert to Lab using transicc
			rgb_to_lab( rgb.r, rgb.g, rgb.b, function( err, lab ){

				// grab the hex value
				var hex = rgb_to_hex( rgb.r, rgb.g, rgb.b );

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
					"hsl": {
						"h": h,
						"s": s,
						"l": l
					},
					"hsv": rgb_to_hsv( rgb.r, rgb.g, rgb.b ),
					"rgb": rgb,
					"xyz": xyz
				};

				// send the response to the browser
				callback( err, response );

			});

		});

	});

};

