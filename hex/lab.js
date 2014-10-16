

var hex_to_rgb = require( "./rgb" ),
	rgb_to_lab = require( "../rgb/lab" );


// convert a hex color to Lab
module.exports = function( hex, callback ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

    // convert hex to RGB
    var rgb = hex_to_rgb( hex );

    // then RGB to Lab
    rgb_to_lab( rgb.r, rgb.g, rgb.b, function( err, lab ){

    	// pass it into the callback function
    	callback( err, lab );

    });

}

