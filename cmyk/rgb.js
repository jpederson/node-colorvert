

var transicc = require( "transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, callback ){

	transicc( "adobe/ISOcoated_v2_300_bas", "rgb", [ c, m, y, k ], function( rgb ){

		// construct RGB response
		var response = {
			"r": Math.round( rgb[0] ),
			"g": Math.round( rgb[1] ),
			"b": Math.round( rgb[2] )
		};

		// pass it to the callback function
		callback( response );
	
	});

};

