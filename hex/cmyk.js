

var hex_to_rgb = require( "./rgb" ),
	rgb_to_cmyk = require( "../rgb/cmyk" );


// convert a hex color to CMYK
module.exports = function( hex, callback ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to CMYK
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( err, cmyk ){

    	// pass it into the callback function
    	callback( err, cmyk );

    });

}

