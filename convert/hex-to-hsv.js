

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_hsv = require( "./rgb-to-hsv" );


// conver a hex color to RGB
module.exports = function( hex ){

    // convert string to base 16 number
    var rgb = hex_to_rgb( hex );

    return rgb_to_hsv( rgb.r, rgb.g, rgb.b );

}

