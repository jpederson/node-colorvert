

// convert HSL to HSV
module.exports = function( h, s, l ){
    
    s *= l < .5 ? l : 1 - l;
 
    return {
    	// hue stays the same
        "h": h,
        
        // saturation
        "s": 2 * s / ( l + s ),

        // value
        "l": l + s
    };

}

