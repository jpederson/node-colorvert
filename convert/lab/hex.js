

var lab_to_rgb = require( "./rgb" ),
	rgb_to_hex = require( "../rgb/hex" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	// initiate the command, and an empty response object
	lab_to_rgb( l, a, b, function( rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( rgb_to_hex( rgb.r, rgb.g, rgb.b ) );

	});

};

