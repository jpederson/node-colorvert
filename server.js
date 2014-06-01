

// fire up express
var express = require( "express" ),
	app = express();


// handle homepage requests
app.use( express.static( __dirname + '/public' ) );


// cmyk endpoint
app.get( '/cmyk/*', require( "./api/cmyk" ) );


// lab endpoint
app.get( '/lab/*', require( "./api/lab" ) );


// catch-all invalid endpoint response
app.get( '*', function( req, res ){
	res.send( "invalid endpoint" );
});


// listen for requests
app.listen( 8080 );

