

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( r, g, b, callback ){

	if ( isNaN( r ) || isNaN( g ) || isNaN( b ) ) {
		return callback( "ERROR: Please provide valid R, G, and B values." );
	}

	// initiate the command, and an empty response object
	transicc( "rgb", "cmyk", [ r, g, b ], function( err, cmyk ){

		// construct a response
		var response = {
			"c": Math.round( cmyk[0] ),
			"m": Math.round( cmyk[1] ),
			"y": Math.round( cmyk[2] ),
			"k": Math.round( cmyk[3] )
		};
		
		// feed it into the callback
		callback( err, response );

	});

};

