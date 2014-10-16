

var cvert = require( "../colorvert" ),
	should = require( "should" );

describe('Test Conversions: Hex', function(){


	// Test the CMYK conversion
	describe('to CMYK', function () {

		it('should convert hex( #00a0e0 ) to cmyk( 96, 11, 4, 0 )', function ( done ) {

			cvert.hex_to_cmyk( "00a0e0", function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.c.should.equal( 96 );
				response.m.should.equal( 11 );
				response.y.should.equal( 4 );
				response.k.should.equal( 0 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the Lab conversion
	describe('to Lab', function () {

		it('should convert hex( #00a0e0 ) to lab( 59, -35, -48 )', function ( done ) {

			cvert.hex_to_lab( "00a0e0", function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.l.should.equal( 59 );
				response.a.should.equal( -35 );
				response.b.should.equal( -48 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to XYZ', function () {

		it('should convert hex( #00a0e0 ) to xyz( 53, 72, 197 )', function ( done ) {

			cvert.hex_to_xyz( "00a0e0", function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.x.should.equal( 53 );
				response.y.should.equal( 72 );
				response.z.should.equal( 197 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSL conversion
	describe('to HSL', function () {

		it('should convert hex( #00a0e0 ) to hsl( 197, 100, 43 )', function ( done ) {

			var response = cvert.hex_to_hsl( "00a0e0" );

			// test the response
			response.h.should.equal( 197 );
			response.s.should.equal( 100 );
			response.l.should.equal( 43 );

			// finished with the test.
			done();

		});

	});



	// Test the HSV conversion
	describe('to HSV', function () {

		it('should convert hex( #00a0e0 ) to hsv( 196, 100, 92 )', function ( done ) {

			var response = cvert.hex_to_hsv( "00a0e0" );

			// test the response
			response.h.should.equal( 197 );
			response.s.should.equal( 100 );
			response.v.should.equal( 87 );

			// finished with the test.
			done();

		});

	});



	// Test the Hex Conversion
	describe('to RGB', function () {

		it('should convert hex( #00a0e0 ) to rgb( 0, 160, 224 )', function ( done ) {

			var response = cvert.hex_to_rgb( "00a0e0" );

			// check the response.
			response.r.should.equal( 0 );
			response.g.should.equal( 160 );
			response.b.should.equal( 224 );

			// test finished
			done();

		});

	});


});

