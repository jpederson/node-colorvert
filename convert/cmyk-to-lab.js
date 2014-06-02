

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, callback ){

	// initiate the command, and an empty response object
	transicc( "cmyk", "lab", [ c, m, y, k ], function( lab ){

		// construct a response
		var response = {
			"l": Math.round( lab[0], -2 ),
			"a": Math.round( lab[1], -2 ),
			"b": Math.round( lab[2], -2 )
		};

		// pass it to the callback function
		callback( response );
	
	});

};

