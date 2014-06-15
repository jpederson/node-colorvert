

var transicc = require( "transicc" );


// convert from CMYK to Lab using transicc
module.exports = function( c, m, y, k, callback ){

	if ( isNaN( c ) || isNaN( m ) || isNaN( y ) || isNaN( k ) ) {
		callback( "ERROR: Please provide valid C, M, Y, and K values." );
		return;
	}

	transicc( "cmyk", "lab", [ c, m, y, k ], function( err, lab ){

		// construct Lab response
		var response = {
			"l": Math.round( lab[0], -2 ),
			"a": Math.round( lab[1], -2 ),
			"b": Math.round( lab[2], -2 )
		};

		// pass it to the callback function
		callback( err, response );
	
	});

};

