

var transicc = require( "transicc" );


// convert from CMYK to XYZ using transicc
module.exports = function( l, a, b, callback ){

	transicc( "lab", "xyz", [ l, a, b ], function( xyz ){

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

