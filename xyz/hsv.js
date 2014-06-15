

var xyz_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert from XYZ to RGB using transicc
module.exports = function( x, y, z, callback ){

	if ( isNaN( x ) || isNaN( y ) || isNaN( z ) ) {
		callback( "ERROR: Please provide valid X, Y, and Z values." );
		return;
	}

	xyz_to_rgb( x, y, z, function( err, rgb ){

		// and the mathematical conversion to HSV fed into the callback
		callback( err, rgb_to_hsv( rgb.r, rgb.g, rgb.b ) );

	});

};

