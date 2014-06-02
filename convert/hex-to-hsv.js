

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_hsv = require( "./rgb-to-hsv" );


// convert a hex color to HSV
module.exports = function( hex ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // return RGB to HSV conversion
    return rgb_to_hsv( rgb.r, rgb.g, rgb.b );

}

