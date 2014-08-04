

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, callback ){

	if ( isNaN( c ) || isNaN( m ) || isNaN( y ) || isNaN( k ) ) {
		var error = new Error( "ERROR: Please provide valid C, M, Y, and K values.", 'error' )
		callback( error, null );
		return;
	}

	transicc( "cmyk", "rgb", [ c, m, y, k ], function( err, rgb ){

		// construct RGB response
		var response = {
			"r": Math.round( rgb[0] ),
			"g": Math.round( rgb[1] ),
			"b": Math.round( rgb[2] )
		};

		// pass it to the callback function
		callback( err, response );
	
	});

};

