

// convert a hue to RGB
function hue_to_rgb( p, q, t ){

    if ( t < 0 ) {
        t += 1;
    }
    if ( t > 1 ) {
        t -= 1;
    }
    if ( t < 1/6 ) {
        return p + (q - p) * 6 * t;
    }
    if ( t < 1/2 ) {
        return q;
    }
    if ( t < 2/3 ) {
        return p + (q - p) * (2/3 - t) * 6;
    }
    return p;
    
}


// convert HSL to RGB
module.exports = function( h, s, l ){

    var r, g, b;

    if ( s == 0 ) {

        // achromatic
        r = g = b = l;

    } else {

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        // get rgb values of hues
        r = hue_to_rgb( p, q, h + 1/3 );
        g = hue_to_rgb( p, q, h );
        b = hue_to_rgb( p, q, h - 1/3 );

    }

    // return our object
    return {
        "r": Math.round( r * 255 ),
        "g": Math.round( g * 255 ),
        "b": Math.round( b * 255 )
    };

}

