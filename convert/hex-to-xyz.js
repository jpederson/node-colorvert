

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_xyz = require( "./rgb-to-xyz" );


// conver a hex color to XYZ
module.exports = function( hex, callback ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to XYZ
    rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

    	// pass it into the callback function
    	callback( xyz );

    });

}

