

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( r, g, b, callback ){

	if ( isNaN( r ) || isNaN( g ) || isNaN( b ) ) {
		return callback( "ERROR: Please provide valid R, G, and B values." );
	}

	// initiate the command, and an empty response object
	transicc( "rgb", "lab", [ r, g, b ], function( err, lab ){

		// construct Lab response
		var response = {
			"l": Math.round( lab[0] ),
			"a": Math.round( lab[1] ),
			"b": Math.round( lab[2] ),
		};
		
		// feed it into the callback
		callback( err, response );

	});

};

