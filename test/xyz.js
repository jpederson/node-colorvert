

var cvert = require( "../colorvert" ),
	should = require( "should" );


describe( 'Test Conversions: XYZ', function(){

	// Test the CMYK conversion
	describe('to CMYK', function () {

		it('should convert xyz( 52, 71, 197 ) to cmyk( 52, 71, 197 )', function ( done ) {

			cvert.xyz_to_cmyk( 52, 71, 197, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.c.should.equal( 98 );
				response.m.should.equal( 10 );
				response.y.should.equal( 4 );
				response.k.should.equal( 0 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the Lab conversion
	describe('to Lab', function () {

		it('should convert xyz( 52, 71, 197 ) to lab( 59, -37, -49 )', function ( done ) {

			cvert.xyz_to_lab( 52, 71, 197, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.l.should.equal( 59 );
				response.a.should.equal( -36 );
				response.b.should.equal( -49 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to RGB', function () {

		it('should convert xyz( 52, 71, 197 ) to rgb( 0, 160, 224 )', function ( done ) {

			cvert.xyz_to_rgb( 52, 71, 197, function( err, response ) {

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

		it('should convert xyz( 52, 71, 197 ) to hsl( 197, 100, 43 )', function ( done ) {

			cvert.xyz_to_hsl( 52, 71, 197, function( err, response ) {

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

		it('should convert xyz( 52, 71, 197 ) to hsv( 197, 100, 87 )', function ( done ) {

			cvert.xyz_to_hsv( 52, 71, 197, function( err, response ) {

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

		it('should convert xyz( 52, 71, 197 ) to hex( #00a0e0 )', function ( done ) {

			cvert.xyz_to_hex( 52, 71, 197, function( err, response ) {

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


