

var cmyk_to_rgb  = require( "./rgb" ),
	cmyk_to_xyz  = require( "./xyz" ),
	cmyk_to_lab  = require( "./lab" ),
	rgb_to_hex   = require( "../rgb/hex" ),
	rgb_to_hsl   = require( "../rgb/hsl" ),
	rgb_to_hsv   = require( "../rgb/hsv" ),
	hex_invert   = require( "../hex/invert" ),
	hex_readable = require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( c, m, y, k, callback ){

	if ( isNaN( c ) || isNaN( m ) || isNaN( y ) || isNaN( k ) ) {
		callback( "ERROR: Please provide valid C, M, Y, and K values." );
		return;
	}

	// convert to lab using transicc
	cmyk_to_lab( c, m, y, k, function( err, lab ){

		// convert to XYZ using transicc
		cmyk_to_xyz( c, m, y, k, function( err, xyz ){

			// convert to RGB using transicc
			cmyk_to_rgb( c, m, y, k, function( err, rgb ){

				// grab the hex value
				var hex = rgb_to_hex( rgb.r, rgb.g, rgb.b );

				// build the response object
				var response = {
					"cmyk": {
						"c": c,
						"m": m,
						"y": y,
						"k": k
					},
					"lab": lab,
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
					"hsl": rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
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

