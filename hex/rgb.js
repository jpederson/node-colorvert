

// conver a hex color to RGB
module.exports = function( hex ){

	// clean the hex input
	hex = hex.replace( /#/g, "" );

    // convert string to base 16 number
    var num = parseInt( hex, 16 );

    // return the red, green and blue values
    return {
    	"r": num >> 16,
    	"g": num >> 8 & 255,
    	"b": num & 255
    }

}

