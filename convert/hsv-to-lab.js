

var hsv_to_rgb = require( "./hsv-to-rgb" ),
	rgb_to_lab = require( "./rgb-to-lab" );


// conver a hex color to RGB
module.exports = function( h, s, v, callback ){

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to Lab
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

    	// pass it into the callback function
    	callback( lab );

    });

}

