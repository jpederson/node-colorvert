

var hex_to_rgb   = require( "./rgb" ),
	rgb_to_cmyk  = require( "../rgb/cmyk" ),
	rgb_to_xyz   = require( "../rgb/xyz" ),
	rgb_to_lab   = require( "../rgb/lab" ),
	rgb_to_hsv   = require( "../rgb/hsv" ),
	rgb_to_hsl   = require( "../rgb/hsl" ),
	hex_invert   = require( "./invert" ),
	hex_readable = require( "./readable" );


// convert hex to all other color formats
module.exports = function( hex, callback ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

	// convert to RGB first
	var rgb = hex_to_rgb( hex );

	// convert to CMYK using transicc
	rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( err, cmyk ){

		// convert to XYZ using transicc
		rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( err, xyz ){

			// convert to Lab using transicc
			rgb_to_lab( rgb.r, rgb.g, rgb.b, function( err, lab ){

				// build the response object
				var response = {
					"cmyk": cmyk,
					"lab": lab,
					"hex": "#"+hex,
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

