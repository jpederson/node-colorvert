

var hex_to_rgb = require( "./rgb" );

module.exports = function( hex ){
	
	// convert to RGB quick.
	var rgb = hex_to_rgb( hex );

	// use RGB values to select optimum text color with the maths.
	if ( ( rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 ) > 186 ){
		return "#000000";
	} else { 
		return "#ffffff";
	}

}

