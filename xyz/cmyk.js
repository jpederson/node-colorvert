

var transicc = require( "transicc" );


// convert from XYZ to CMYK using transicc
module.exports = function( x, y, z, callback ){

	transicc( "xyz", "cmyk", [ x, y, z ], function( cmyk ){

		// construct a response
		var response = {
			"c": Math.round( cmyk[0] ),
			"m": Math.round( cmyk[1] ),
			"y": Math.round( cmyk[2] ),
			"k": Math.round( cmyk[3] )
		};
		
		// pass it into the callback
		callback( response );

	});

};

