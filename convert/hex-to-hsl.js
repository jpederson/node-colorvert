

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_hsl = require( "./rgb-to-hsl" );


// convert hex to HSL
module.exports = function( hex ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // return RGB to HSL conversion
    return rgb_to_hsl( rgb.r, rgb.g, rgb.b );

}

