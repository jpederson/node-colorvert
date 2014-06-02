

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_hsl = require( "./rgb-to-hsl" );


// conver a hex color to RGB
module.exports = function( hex ){

    // convert string to base 16 number
    var rgb = hex_to_rgb( hex );

    return rgb_to_hsl( rgb.r, rgb.g, rgb.b );

}

