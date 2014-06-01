

var transicc = require( "./transicc" );


// convert from CMYK to RGB using transicc
module.exports = function( c, m, y, k, transicc_callback ){

	// initiate the command, and an empty response object
	transicc( "cmyk", "rgb", [ c, m, y, k ], function( rgb ){

		var response = {
			"r": Math.round( rgb[0] ),
			"g": Math.round( rgb[1] ),
			"b": Math.round( rgb[2] )
		};

		transicc_callback( response );
	
	});

};

