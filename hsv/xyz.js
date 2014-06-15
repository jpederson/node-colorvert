

var hsv_to_rgb = require( "./rgb" ),
	rgb_to_xyz = require( "../rgb/xyz" );


// convert a HSV to RGB
module.exports = function( h, s, v, callback ){

	if ( isNaN( h ) || isNaN( s ) || isNaN( v ) ) {
		return callback( new Error( 'ERROR: Please provide valid H, S, and V values.' ), null );
	}

    // convert hex to RGB
    var rgb = hsv_to_rgb( h, s, v );

    // then RGB to Lab
    rgb_to_xyz( rgb.r, rgb.g, rgb.b, function( err, xyz ){

    	// pass it into the callback function
    	callback( err, xyz );

    });

}

