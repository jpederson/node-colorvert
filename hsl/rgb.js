

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */

module.exports = function( h, s, l ) {

    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {

        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;

    }

    if ( s === 0 ){
        r = g = b = l; // achromatic
    } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { 
        r: Math.round( r * 255 ), 
        g: Math.round( g * 255 ),
        b: Math.round( b * 255 )
    };

};



// Take input from [0, n] and return it as [0, 1]
function bound01( n, max ) {

    if ( typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1 ) { n = "100%"; }

    var processPercent = ( typeof n === "string" && n.indexOf('%') != -1 );
    n = Math.min( max, Math.max( 0, parseFloat( n ) ) );

    // Automatically convert percentage into number
    if ( processPercent ) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if (( Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);

}


