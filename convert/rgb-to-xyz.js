

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( r, g, b, callback ){

	// initiate the command, and an empty response object
	transicc( "rgb", "xyz-d65", [ r, g, b ], function( xyz ){

		// construct a response
		var response = {
			"x": Math.round( xyz[0] ),
			"y": Math.round( xyz[1] ),
			"z": Math.round( xyz[2] )
		};
		
		// feed it into the callback
		callback( response );

	});

};

