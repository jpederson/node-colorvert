

// convert an RGB color to hex
module.exports = function( red, green, blue ){

    // return 6 digit Hexadecimal string
    return "#" + (( blue | green << 8 | red << 16 ) | 1 << 24 ).toString(16).slice(1);

}

