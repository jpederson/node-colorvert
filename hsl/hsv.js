

var hsl_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert HSL to HSV
module.exports = function( h, s, l ){

	var rgb = hsl_to_rgb( h, s, l );

	return rgb_to_hsv( rgb.r, rgb.g, rgb.b );

}

