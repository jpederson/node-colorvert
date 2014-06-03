

var xyz_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert from XYZ to RGB using transicc
module.exports = function( x, y, z, callback ){

	xyz_to_rgb( x, y, z, function( rgb ){

		// and the mathematical conversion to HSV fed into the callback
		callback( rgb_to_hsv( rgb.r, rgb.g, rgb.b ) );

	});

};

