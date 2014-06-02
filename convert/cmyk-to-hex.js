

var cmyk_to_rgb = require( "./cmyk-to-rgb" ),
	rgb_to_hex = require( "./rgb-to-hex" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, callback ){

	// initiate the command, and an empty response object
	cmyk_to_rgb( c, m, y, k, function( rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( rgb_to_hex( rgb.r, rgb.g, rgb.b ) );

	});

};
