

var lab_to_rgb = require( "./rgb" ),
	rgb_to_hsl = require( "../rgb/hsl" );


// convert from Lab to RGB using transicc
module.exports = function( l, a, b, callback ){

	lab_to_rgb( l, a, b, function( rgb ){

		// and the mathematical conversion to HSL fed into the callback
		callback( rgb_to_hsl( rgb.r, rgb.g, rgb.b ) );

	});

};

