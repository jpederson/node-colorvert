

var hsl_to_rgb = require( "./rgb" ),
	rgb_to_cmyk = require( "../rgb/cmyk" );


// conver a hex color to CMYK
module.exports = function( h, s, l, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( l ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and L values.' ), null );
	}

    // convert hex to RGB
    var rgb = hsl_to_rgb( h, s, l );

    // then RGB to CMYK
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( err, cmyk ){

    	// pass it into the callback function
    	callback( err, cmyk );

    });

}

