

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( l, a, b, callback ){

	if ( isNaN( l ) || isNaN( a ) || isNaN( b ) ) {
		return callback( new Error( 'ERROR: Please provide valid L, a, and b values.' ), null );
	}

	// initiate the command, and an empty response object
	transicc( "lab", "cmyk", [ l, a, b ], function( err, cmyk ){

		// construct a response
		var response = {
			"c": Math.round( cmyk[0] ),
			"m": Math.round( cmyk[1] ),
			"y": Math.round( cmyk[2] ),
			"k": Math.round( cmyk[3] )
		};
		
		// pass it into the callback
		callback( err, response );

	});

};

