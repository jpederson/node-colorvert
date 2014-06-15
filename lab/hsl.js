

var lab_to_rgb = require( "./rgb" ),
	rgb_to_hsl = require( "../rgb/hsl" );


// convert from Lab to RGB using transicc
module.exports = function( l, a, b, callback ){

	if ( isNaN( l ) || isNaN( a ) || isNaN( b ) ) {
		return callback( new Error( 'ERROR: Please provide valid L, a, and b values.' ), null );
	}

	lab_to_rgb( l, a, b, function( err, rgb ){

		// and the mathematical conversion to HSL fed into the callback
		callback( err, rgb_to_hsl( rgb.r, rgb.g, rgb.b ) );

	});

};

