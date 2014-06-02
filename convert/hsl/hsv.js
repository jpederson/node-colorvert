

// convert HSL to HSV
module.exports = function( h, s, l ){

	var rh = h;
	l *= 2;
	s *= ( l <= 1 ) ? l : 2 - l;
	var rv = ( l + s ) / 2;
	var rs = ( 2 * s ) / ( l + s );

	return {
		"h": rh,
		"s": rs,
		"v": rv
	}

}

