

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_hex = require( "../rgb/hex" );


// convert a HSV to RGB
module.exports = function( h, s, v ){

    // convert HSV to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // return the hex color
    return rgb_to_hex( rgb.r, rgb.g, rgb.b );

}

