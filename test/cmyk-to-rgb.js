

var cvert = require( "../colorvert" ),
	should = require( "should" );


// Since we're not responsible for the accuracy of profiles
// we just want to test to make sure a conversion works.

describe('colorvert', function () {

	it('should convert cmyk( 100, 0, 0, 0 ) to rgb( 0, 172, 236 )', function ( done ) {

		cvert.cmyk_to_rgb( 100, 0, 0, 0, function( response ) {

			response.r.should.equal( 0 );
			response.g.should.equal( 172 );
			response.b.should.equal( 236 );
			done();

		});

	});

});

