

var hex_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert a hex color to CMYK
module.exports = function( hex, callback ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to CMYK
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

    	// pass it into the callback function
    	callback( cmyk );

    });

}

