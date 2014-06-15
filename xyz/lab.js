

var transicc = require( "transicc" );


// convert from XYZ to Lab using transicc
module.exports = function( x, y, z, callback ){

	if ( isNaN( x ) || isNaN( y ) || isNaN( z ) ) {
		callback( "ERROR: Please provide valid X, Y, and Z values." );
		return;
	}

	transicc( "xyz", "lab", [ x, y, z ], function( err, lab ){

		// construct a response
		var response = {
			"l": Math.round( lab[0] ),
			"a": Math.round( lab[1] ),
			"b": Math.round( lab[2] )
		};
		
		// feed it into the callback
		callback( err, response );

	});

};

