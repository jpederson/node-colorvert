

var hsv_to_rgb   = require( "./rgb" ),
	rgb_to_cmyk  = require( "../rgb/cmyk" ),
	rgb_to_xyz   = require( "../rgb/xyz" ),
	rgb_to_lab   = require( "../rgb/lab" ),
	rgb_to_hex   = require( "../rgb/hex" ),
	rgb_to_hsl   = require( "../rgb/hsl" ),
	hex_invert   = require( "../hex/invert" ),
	hex_readable = require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( h, s, v, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( v ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and V values.' ), null );
	}

	// convert to RGB first
	var rgb = hsv_to_rgb( h, s, v );

	// convert to CMYK using transicc
	rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

			// convert to Lab using transicc
			rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

				// grab the hex
				var hex = rgb_to_hex( rgb.r, rgb.g, rgb.b );

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
					"hsl": rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
					"hsv": {
						"h": h,
						"s": s,
						"v": v
					},
					"rgb": rgb,
					"xyz": xyz
				};

				// send the response to the browser
				callback( response );

			});

		});

	});

};

