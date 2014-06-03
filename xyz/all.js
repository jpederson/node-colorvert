

var xyz_to_cmyk = require( "./cmyk" ),
	xyz_to_lab  = require( "./lab" ),
	xyz_to_rgb  = require( "./rgb" ),
	rgb_to_hex  = require( "../rgb/hex" ),
	rgb_to_hsl  = require( "../rgb/hsl" ),
	rgb_to_hsv  = require( "../rgb/hsv" );


// convert HSV to all other color formats
module.exports = function( x, y, z, callback ){

	// convert to rgb using transicc
	xyz_to_cmyk( x, y, z, function( cmyk ){

		// convert to lab using transicc
		xyz_to_lab( x, y, z, function( lab ){

			// convert to lab using transicc
			xyz_to_rgb( x, y, z, function( rgb ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": rgb_to_hex( rgb.r, rgb.g, rgb.b ),
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
				callback( response );

			});

		});

	});

};

