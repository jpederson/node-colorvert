

var hsl_to_rgb = require( "./rgb" ),
	rgb_to_hex = require( "../rgb/hex" );


// convert HSL to hex
module.exports = function( h, s, l ){

    // convert HSL to RGB
    var rgb = hsl_to_rgb( h, s, l );

    // return RGB to hex conversion
    return rgb_to_hex( rgb.r, rgb.g, rgb.b );

}

