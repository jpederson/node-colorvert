

var hsv_to_rgb = require( "./hsv-to-rgb" ),
	rgb_to_hex = require( "./rgb-to-hex" );


// conver a hex color to RGB
module.exports = function( h, s, v ){

    // convert string to base 16 number
    var rgb = hsv_to_rgb( h, s, v );

    return rgb_to_hex( rgb.r, rgb.g, rgb.b );

}

