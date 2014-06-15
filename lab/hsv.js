

var lab_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	if ( isNaN( l ) || isNaN( a ) || isNaN( b ) ) {
		return callback( new Error( 'ERROR: Please provide valid L, a, and b values.' ), null );
	}

	// initiate the command, and an empty response object
	lab_to_rgb( l, a, b, function( err, rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( err, rgb_to_hsv( rgb.r, rgb.g, rgb.b ) );

	});

};

