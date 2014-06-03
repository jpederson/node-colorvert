

var transicc = require( "transicc" );


// convert from XYZ to Lab using transicc
module.exports = function( x, y, z, callback ){

	transicc( "xyz-d65", "lab", [ x, y, z ], function( lab ){

		// construct a response
		var response = {
			"l": Math.round( lab[0] ),
			"a": Math.round( lab[1] ),
			"b": Math.round( lab[2] )
		};
		
		// feed it into the callback
		callback( response );

	});

};

