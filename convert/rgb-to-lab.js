

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( r, g, b, callback ){

	// initiate the command, and an empty response object
	transicc( "rgb", "lab", [ r, g, b ], function( lab ){

		// construct a response
		var response = {
			"c": Math.round( lab[0] ),
			"m": Math.round( lab[1] ),
			"y": Math.round( lab[2] ),
			"k": Math.round( lab[3] )
		};
		
		// feed it into the callback
		callback( response );

	});

};

