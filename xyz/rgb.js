

var transicc = require( "transicc" );


// convert from XYZ to RGB using transicc
module.exports = function( x, y, z, callback ){

	transicc( "xyz", "rgb", [ x, y, z ], function( rgb ){

		// construct a response
		var response = {
			"r": Math.round( rgb[0] ),
			"g": Math.round( rgb[1] ),
			"b": Math.round( rgb[2] )
		};
		
		// feed it into the callback
		callback( response );

	});

};

