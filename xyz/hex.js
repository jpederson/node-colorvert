

var xyz_to_rgb = require( "./rgb" ),
	rgb_to_hex = require( "../rgb/hex" );


// convert from XYZ to hex using transicc
module.exports = function( x, y, z, callback ){

	xyz_to_rgb( x, y, z, function( rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( rgb_to_hex( rgb.r, rgb.g, rgb.b ) );

	});

};

