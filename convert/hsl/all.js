

var hsl_to_rgb  = require( "./rgb" ),
	rgb_to_cmyk = require( "../rgb/cmyk" ),
	rgb_to_xyz  = require( "../rgb/xyz" ),
	rgb_to_lab  = require( "../rgb/lab" ),
	rgb_to_hex  = require( "../rgb/hex" ),
	rgb_to_hsl  = require( "../rgb/hsl" );


// convert HSV to all other color formats
module.exports = function( h, s, l, callback ){

	// convert to RGB first
	var rgb = hsl_to_rgb( h, s, l );

	// convert to CMYK using transicc
	rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

			// convert to Lab using transicc
			rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": rgb_to_hex( rgb.r, rgb.g, rgb.b ),
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
				callback( response );

			});

		});

	});

};

