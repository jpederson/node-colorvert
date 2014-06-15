

var xyz_to_rgb = require( "./rgb" ),
	rgb_to_hex = require( "../rgb/hex" );


// convert from XYZ to hex using transicc
module.exports = function( x, y, z, callback ){

	if ( isNaN( x ) || isNaN( y ) || isNaN( z ) ) {
		callback( "ERROR: Please provide valid X, Y, and Z values." );
		return;
	}

	xyz_to_rgb( x, y, z, function( err, rgb ){
		
		// and the mathematical conversion to hex fed into the callback
		callback( err, rgb_to_hex( rgb.r, rgb.g, rgb.b ) );

	});

};

