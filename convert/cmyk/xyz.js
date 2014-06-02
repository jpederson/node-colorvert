

var transicc = require( "transicc" );


// convert from CMYK to XYZ using transicc
module.exports = function( c, m, y, k, callback ){

	transicc( "cmyk", "xyz-d65", [ c, m, y, k ], function( xyz ){

		// construct XYZ response
		var response = {
			"x": Math.round( xyz[0], -2 ),
			"y": Math.round( xyz[1], -2 ),
			"z": Math.round( xyz[2], -2 )
		};

		// pass it to the callback function
		callback( response );
	
	});

};

