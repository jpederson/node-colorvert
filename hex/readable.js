

module.exports = function( hex ){

	// remove the #
	hex = hex.replace( /#/g, "" );

	// determine RGB values
	var r = parseInt(hex.substr(0,2),16);
	var g = parseInt(hex.substr(2,2),16);
	var b = parseInt(hex.substr(4,2),16);

	// compare them
	var yiq = ( ( r * 299 ) + ( g * 587) + ( b * 114 ) ) / 1000;

	// return the right color
	return ( yiq >= 128 ) ? '#000000' : '#ffffff';
}

