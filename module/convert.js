

// math-based hex to RGB conversion
exports.hex_to_rgb = function( color ){

    // convert string to base 16 number
    var num = parseInt(color, 16);

    // return the red, green and blue values as a new array
    return [num >> 16, num >> 8 & 255, num & 255];

};


// math-based RGB to hex conversion
exports.rgb_to_hex = function( red, green, blue ){

    // return 6 digit Hexadecimal string
    return ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1);

};


