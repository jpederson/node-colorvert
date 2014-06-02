

var hsl_to_rgb = require( "./hsl-to-rgb" ),
	rgb_to_xyz = require( "./rgb-to-xyz" );


// conver a HSL color to XYZ
module.exports = function( h, s, l, callback ){

    // convert HSL to RGB
    var rgb = hsl_to_rgb( h, s, l );

    // then RGB to XYZ
    rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( xyz ){

    	// pass it into the callback function
    	callback( xyz );

    });

}

