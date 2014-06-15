

var hex_to_rgb = require( "./rgb" );

module.exports = function( hex ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

	// determine RGB values
	var rgb = hex_to_rgb( hex );

	// compare them
	var yiq = ( ( rgb.r * 299 ) + ( rgb.g * 587) + ( rgb.b * 114 ) ) / 1000;

	// return the right color
	return ( yiq >= 128 ) ? '#000000' : '#ffffff';
}

