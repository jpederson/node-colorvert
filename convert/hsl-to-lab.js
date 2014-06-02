

var hsl_to_rgb = require( "./hsl-to-rgb" ),
	rgb_to_lab = require( "./rgb-to-lab" );


// conver a hex color to CMYK
module.exports = function( h, s, l, callback ){

    // convert hex to RGB
    var rgb = hsl_to_rgb( h, s, l );

    // then RGB to CMYK
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

    	// pass it into the callback function
    	callback( lab );

    });

}

