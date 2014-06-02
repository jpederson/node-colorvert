

var hex_to_rgb = require( "./hex-to-rgb" ),
	rgb_to_hsv = require( "./rgb-to-hsv" );


// conver a hex color to RGB
module.exports = function( hex, callback ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to Lab
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( cmyk ){

    	// pass it into the callback function
    	callback( cmyk );

    });

}

