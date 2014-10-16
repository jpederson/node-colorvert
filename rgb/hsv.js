

// convert RGB to HSV
module.exports = function( r, g, b ) {

    var min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        delta = max - min,
        h, s, v = max;

    v = Math.floor(max / 255 * 100);
    if ( max != 0 )
        s = Math.floor(delta / max * 100);
    else {
        // black
        return [0, 0, 0];
    }

    if( r == max )
        h = ( g - b ) / delta;         // between yellow & magenta
    else if( g == max )
        h = 2 + ( b - r ) / delta;     // between cyan & yellow
    else
        h = 4 + ( r - g ) / delta;     // between magenta & cyan

    h = Math.floor(h * 60);            // degrees
    if( h < 0 ) h += 360;

    return {
        "h": h,
        "s": s, 
        "v": v
    };
    
}
