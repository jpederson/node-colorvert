

var lab_to_cmyk = require( "./cmyk" ),
	lab_to_rgb  = require( "./rgb" ),
	lab_to_xyz  = require( "./xyz" ),
	rgb_to_lab  = require( "../rgb/lab" ),
	rgb_to_hex  = require( "../rgb/hex" ),
	rgb_to_hsl  = require( "../rgb/hsl" ),
	hex_invert  = require( "../hex/invert" ),
	hex_readable= require( "../hex/readable" );


// convert HSV to all other color formats
module.exports = function( l, a, b, callback ){

	// convert to rgb using transicc
	lab_to_cmyk( l, a, b, function( cmyk ){

		// convert to lab using transicc
		lab_to_xyz( l, a, b, function( xyz ){

			// convert to lab using transicc
			lab_to_rgb( l, a, b, function( rgb ){

				// grab the hex value
				var hex = rgb_to_hex( rgb.r, rgb.g, rgb.b );

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": {
						"l": l,
						"a": a,
						"b": b
					},
					"hex": hex,
					"hex_inverted": hex_invert( hex ),
					"hex_readable": hex_readable( hex ),
					"hsl": rgb_to_hsl( rgb.r, rgb.g, rgb.b ),
					"hsv": rgb_to_hsv( rgb.r, rgb.g, rgb.b ),
					"rgb": rgb,
					"xyz": xyz
				};

				// send the response to the browser
				callback( response );

			});

		});

	});

};

