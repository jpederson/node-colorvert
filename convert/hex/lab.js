

var hex_to_rgb = require( "./rgb" ),
	rgb_to_hsv = require( "../rgb/hsv" );


// convert a hex color to Lab
module.exports = function( hex, callback ){

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to Lab
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

    	// pass it into the callback function
    	callback( lab );

    });

}

