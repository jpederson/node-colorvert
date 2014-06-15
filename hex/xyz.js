

var hex_to_rgb = require( "./rgb" ),
	rgb_to_xyz = require( "../rgb/xyz" );


// convert a hex color to XYZ
module.exports = function( hex, callback ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to XYZ
    rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( err, xyz ){

    	// pass it into the callback function
    	callback( err, xyz );

    });

}

