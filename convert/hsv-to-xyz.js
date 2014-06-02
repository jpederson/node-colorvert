

var hsv_to_rgb = require( "./hsv-to-rgb" ),
	rgb_to_xyz = require( "./rgb-to-xyz" );


// convert a HSV to RGB
module.exports = function( h, s, v, callback ){

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to Lab
    rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

    	// pass it into the callback function
    	callback( xyz);

    });

}

