

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	if ( isNaN( l ) || isNaN( a ) || isNaN( b ) ) {
		return callback( new Error( 'ERROR: Please provide valid L, a, and b values.' ), null );
	}

	// initiate the command, and an empty response object
	transicc( "lab", "rgb", [ l, a, b ], function( err, rgb ){

		// construct a response
		var response = {
			"r": Math.round( rgb[0] ),
			"g": Math.round( rgb[1] ),
			"b": Math.round( rgb[2] )
		};
		
		// feed it into the callback
		callback( err, response );

	});

};

