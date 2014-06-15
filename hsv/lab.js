

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_lab = require( "../rgb/lab" );


// conver a hex color to RGB
module.exports = function( h, s, v, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( v ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and V values.' ), null );
	}

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to Lab
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( err, lab ){

    	// pass it into the callback function
    	callback( err, lab );

    });

}

