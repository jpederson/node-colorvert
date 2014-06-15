

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_cmyk = require( "../rgb/cmyk" );


// conver a hex color to RGB
module.exports = function( h, s, v, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( v ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and V values.' ), null );
	}

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to CMYK
    rgb_to_cmyk( rgb.r, rgb.g, rgb.b, function( err, cmyk ){

    	// pass it into the callback function
    	callback( err, cmyk );

    });

}

