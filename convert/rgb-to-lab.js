

var spawn = require( "child_process" ).spawn;


// convert from CMYK to RGB using transicc
module.exports = function( r, g, b, callback ){

	// initiate the command, and an empty response object
	var cmd = spawn( "./shell/3.sh", [ "rgb.icc", "lab.icc", r, g, b ] ),
		response = {};


	// when we receive output from the command
	cmd.stdout.on( 'data', function ( data ) {

		// parse the output
		var data_parts = new String( data ).split( " " );

		// populate the values into our response
		response["l"] = data_parts[0];
		response["a"] = data_parts[1];
		response["b"] = data_parts[2];
	
	});


	// once the command is finished
	cmd.on( 'close', function ( code ) {
		
		// since we're working asynchronously, we can't return
		// so we'll pass our response into a callback function.
		callback( response );

	});

};

