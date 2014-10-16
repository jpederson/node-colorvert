

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_hsl = require( "../rgb/hsl" );


// convert HSV to HSL
module.exports = function( h, s, v ){

    var rgb = hsv_to_rgb( h, s, v );

    return rgb_to_hsl( rgb.r, rgb.g, rgb.b );

}
