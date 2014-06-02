

// fire up express
var express = require( "express" ),
	app = express();


// handle homepage requests
app.use( express.static( __dirname + '/public' ) );


// handle API requests
app.get( '/cmyk/*', require( "./api/cmyk" ) );
app.get( '/hex/*', require( "./api/hex" ) );
app.get( '/hsl/*', require( "./api/hsl" ) );
app.get( '/hsv/*', require( "./api/hsv" ) );
app.get( '/lab/*', require( "./api/lab" ) );
app.get( '/rgb/*', require( "./api/rgb" ) );


// catch-all invalid endpoint response
app.get( '*', function( req, res ){
	res.send( "invalid endpoint" );
});


// listen for requests
app.listen( 8080 );

