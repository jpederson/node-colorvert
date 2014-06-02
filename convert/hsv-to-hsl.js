

// conver HSV values to HSL
module.exports = function( h, s, v ){
    
    return {

        // hue stays the same
        "h": hue, 
 
        // saturation is very different between the two color spaces
        // if ( 2 - sat ) * val < 1 set it to sat * val / ( ( 2 - sat ) * val )
        // otherwise sat * val / ( 2 - ( 2 - sat ) * val )
        // conditional is not operating with hue, it is reassigned!
        "s": s * v / ( ( h = ( 2 - s ) * v ) < 1 ? h : 2 - h), 
		
        // lightness is (2-s)*v/2
        "l": h/2 

    };

}
