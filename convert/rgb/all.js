

var rgb_to_cmyk = require( "./cmyk" ),
	rgb_to_xyz  = require( "./xyz" ),
	rgb_to_lab  = require( "./lab" ),
	rgb_to_hex  = require( "./hex" ),
	rgb_to_hsl  = require( "./hsl" ),
	rgb_to_hsv  = require( "./hsv" );


// convert HSV to all other color formats
module.exports = function( h, s, v, callback ){

	// convert to RGB first
	var rgb = hsv_to_rgb( h, s, v );

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

