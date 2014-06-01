

var spawn = require( "child_process" ).spawn,
	convert = require( "../module/convert" );	// conversion functions


module.exports = function( req, res ){
		
	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		params = [];

	// and loop through the rest of the URL for color parameters
	for ( var i = 1; i < url_parts.length; i++ ) {
		params[i] = url_parts[i];
	}
	
	// if we've got params and a format
	if ( typeof format !== "undefined" && params.length ) {

		var cmd = spawn( "./shell/cmyk-to-rgb.sh", [ params[1], params[2], params[3], params[4] ] ),
			rgb;

		cmd.stdout.on( 'data', function ( data ) {

			rgb = new String( data ).split( " " );
			rgb[0] = Math.round( rgb[0] );
			rgb[1] = Math.round( rgb[1] );
			rgb[2] = Math.round( rgb[2] );
		
		});

		cmd.on( 'close', function ( code ) {

			var hex = convert.rgb_to_hex( rgb[0], rgb[1], rgb[2] );

			// build the response object
			var response = {
				"cmyk": {
					"c": parseInt( params[1] ),
					"m": parseInt( params[2] ),
					"y": parseInt( params[3] ),
					"k": parseInt( params[4] )
				},
				"rgb": {
					"r": Math.round( rgb[0] ),
					"g": Math.round( rgb[1] ),
					"b": Math.round( rgb[2] )
				},
				"hex": "#"+hex
			};

			// output the stringified response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		});

	}

};

