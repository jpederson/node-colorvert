

// convert HSV to RGB
module.exports = function( h, s, v ) {

    h = bound( h, 360 ) * 6;
    s = bound( s, 100 );
    v = bound( v, 100 );

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [ v, q, p, p, t, v ][ mod ],
        g = [ t, v, v, q, p, p ][ mod ],
        b = [ p, p, t, v, v, q ][ mod ];

    return { 
        r: Math.round( r * 255 ), 
        g: Math.round( g * 255 ), 
        b: Math.round( b * 255 )
    };

};



function bound( n, max ) {
    
    if ( typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1 ) { 
        n = "100%";
    }

    var is_percent = ( typeof n === "string" && n.indexOf('%') != -1 );

    n = Math.min( max, Math.max(0, parseFloat(n)));

    if ( is_percent ) {
        n = parseInt( n * max, 10 ) / 100;
    }

    if ( ( Math.abs( n - max ) < 0.000001 ) ) {
        return 1;
    }

    return ( n % max ) / parseFloat( max );

}