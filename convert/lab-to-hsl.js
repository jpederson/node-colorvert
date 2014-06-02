

var lab_to_rgb = require( "./lab-to-rgb" ),
	rgb_to_hsl = require( "./rgb-to-hsl" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	// initiate the command, and an empty response object
	lab_to_rgb( l, a, b, function( rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( rgb_to_hsl( rgb.r, rgb.g, rgb.b ) );

	});

};

