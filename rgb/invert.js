

// invert an RGB color
// takes several formats: ( r, g, b ), ( "r, g, b" ), ( [ r, g, b ] ), ( "rgb( r, g, b )" ), ( "rgba( r, g, b, a )" )
module.exports = function( rgb ) {

    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');

    for ( var i = 0; i < rgb.length; i++ ) {
    	rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    }

    return {
    	r: rgb[0],
    	g: rgb[1],
    	b: rgb[2],
    	a: rgb[3]
    };

};

