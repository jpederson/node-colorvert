

var transicc = require( "transicc" );


// convert from CMYK to XYZ using transicc
module.exports = function( l, a, b, callback ){

	if ( isNaN( l ) || isNaN( a ) || isNaN( b ) ) {
		return callback( new Error( 'ERROR: Please provide valid L, a, and b values.' ), null );
	}

	transicc( "lab", "xyz", [ l, a, b ], function( err, xyz ){

		// construct a response
		var response = {
			"x": Math.round( xyz[0] ),
			"y": Math.round( xyz[1] ),
			"z": Math.round( xyz[2] )
		};
		
		// feed it into the callback
		callback( err, response );

	});

};

