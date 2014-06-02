

var cmyk_to_rgb  = require( "./rgb" ),
	cmyk_to_xyz  = require( "./xyz" ),
	cmyk_to_lab  = require( "./lab" ),
	rgb_to_hex  = require( "../rgb/hex" ),
	rgb_to_hsl  = require( "../rgb/hsl" );


// convert HSV to all other color formats
module.exports = function( c, m, y, k, callback ){

	// convert to lab using transicc
	cmyk_to_lab( c, m, y, k, function( lab ){

		// convert to XYZ using transicc
		cmyk_to_xyz( c, m, y, k, function( xyz ){

			// convert to RGB using transicc
			cmyk_to_rgb( c, m, y, k, function( rgb ){

				// build the response object
				var response = {
					"cmyk": {
						"c": c,
						"m": m,
						"y": y,
						"k": k
					},
					"lab": lab,
					"hex": rgb_to_hex( rgb.r, rgb.g, rgb.b ),
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

