

var transicc = require( "transicc" );


// convert from XYZ to RGB using transicc
module.exports = function( x, y, z, callback ){

	if ( isNaN( x ) || isNaN( y ) || isNaN( z ) ) {
		callback( "ERROR: Please provide valid X, Y, and Z values." );
		return;
	}

	transicc( "xyz", "rgb", [ x, y, z ], function( err, rgb ){

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

