

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_cmyk = require( "../rgb/cmyk" );


// conver a hex color to RGB
module.exports = function( h, s, v, callback ){

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to CMYK
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

    	// pass it into the callback function
    	callback( cmyk );

    });

}

