

module.exports = function( hex ) {

	// remove #
    hex = hex.substring(1);

    // convert to integer
    hex = parseInt(hex, 16);

    // invert three bytes
    hex = 0xFFFFFF ^ hex;

    // convert to hex
    hex = hex.toString(16);

    // pad with leading zeros
    hex = ("000000" + hex).slice(-6);

    // and return it.
    return "#" + hex;
};

