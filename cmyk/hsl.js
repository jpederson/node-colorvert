

var cmyk_to_rgb = require( "./rgb" ),
	rgb_to_hsl  = require( "../rgb/hsl" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, callback ){

	if ( isNaN( c ) || isNaN( m ) || isNaN( y ) || isNaN( k ) ) {
		callback( "ERROR: Please provide valid C, M, Y, and K values." );
		return;
	}

	// initiate the command, and an empty response object
	cmyk_to_rgb( c, m, y, k, function( err, rgb ){

		// and the mathematical conversion to hex fed into the callback
		callback( err, rgb_to_hsl( rgb.r, rgb.g, rgb.b ) );

	});

};

