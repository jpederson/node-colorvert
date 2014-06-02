

var hsl_to_rgb = require( "./rgb" ),
	rgb_to_lab = require( "../rgb/lab" );


// convert HSL to Lab
module.exports = function( h, s, l, callback ){

    // convert HSL to RGB
    var rgb = hsl_to_rgb( h, s, l );

    // then RGB to Lab
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( lab ){

    	// pass it into the callback function
    	callback( lab );

    });

}

