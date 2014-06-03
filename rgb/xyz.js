

var transicc = require( "transicc" );


// convert from RGB to XYZ using transicc
module.exports = function( r, g, b, callback ){

	transicc( "rgb", "xyz", [ r, g, b ], function( xyz ){

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

