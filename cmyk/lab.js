

var transicc = require( "transicc" );


// convert from CMYK to Lab using transicc
module.exports = function( c, m, y, k, callback ){

	transicc( "adobe/ISOcoated_v2_300_bas", "lab", [ c, m, y, k ], function( lab ){

		// construct Lab response
		var response = {
			"l": Math.round( lab[0], -2 ),
			"a": Math.round( lab[1], -2 ),
			"b": Math.round( lab[2], -2 )
		};

		// pass it to the callback function
		callback( response );
	
	});

};

