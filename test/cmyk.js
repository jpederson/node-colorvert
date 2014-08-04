

var cvert = require( "../colorvert" ),
	should = require( "should" );


describe( 'Test Conversions: CMYK', function(){

	// Test the Lab conversion
	describe('to Lab', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to lab( 59, -37, -49 )', function ( done ) {

			cvert.cmyk_to_lab( 100, 0, 0, 0, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.l.should.equal( 59 );
				response.a.should.equal( -37 );
				response.b.should.equal( -49 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to XYZ', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to xyz( 52, 71, 197 )', function ( done ) {

			cvert.cmyk_to_xyz( 100, 0, 0, 0, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.x.should.equal( 52 );
				response.y.should.equal( 71 );
				response.z.should.equal( 197 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to RGB', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to rgb( 0, 160, 224 )', function ( done ) {

			cvert.cmyk_to_rgb( 100, 0, 0, 0, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.r.should.equal( 0 );
				response.g.should.equal( 160 );
				response.b.should.equal( 224 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSL conversion
	describe('to HSL', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to hsl( 197, 100, 43 )', function ( done ) {

			cvert.cmyk_to_hsl( 100, 0, 0, 0, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.h.should.equal( 197 );
				response.s.should.equal( 100 );
				response.l.should.equal( 43 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSV conversion
	describe('to HSV', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to hsv( 197, 100, 87 )', function ( done ) {

			cvert.cmyk_to_hsv( 100, 0, 0, 0, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.h.should.equal( 197 );
				response.s.should.equal( 100 );
				response.v.should.equal( 87 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the Hex Conversion
	describe('to Hex', function () {

		it('should convert cmyk( 100, 0, 0, 0 ) to hex( #00a0e0 )', function ( done ) {

			cvert.cmyk_to_hex( 100, 0, 0, 0, function( err, response ) {

				// throw error if exists
				if ( err ) throw err;

				// check the response.
				response.should.equal( "#00a0e0" );

				// test finished
				done();

			});

		});

	});


});


