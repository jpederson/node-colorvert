

var cvert = require( "../colorvert" ),
	should = require( "should" );

describe('Test Conversions: RGB', function(){


	// Test the CMYK conversion
	describe('to CMYK', function () {

		it('should convert rgb( 0, 172, 236 ) to cmyk( 95, 3, 4, 0 )', function ( done ) {

			cvert.rgb_to_cmyk( 0, 172, 236, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.c.should.equal( 95 );
				response.m.should.equal( 3 );
				response.y.should.equal( 4 );
				response.k.should.equal( 0 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the Lab conversion
	describe('to Lab', function () {

		it('should convert rgb( 0, 172, 236 ) to lab( 63, -39, -49 )', function ( done ) {

			cvert.rgb_to_lab( 0, 172, 236, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.l.should.equal( 63 );
				response.a.should.equal( -39 );
				response.b.should.equal( -49 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to XYZ', function () {

		it('should convert rgb( 0, 172, 236 ) to xyz( 60, 83, 221 )', function ( done ) {

			cvert.rgb_to_xyz( 0, 172, 236, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.x.should.equal( 60 );
				response.y.should.equal( 83 );
				response.z.should.equal( 221 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSL conversion
	describe('to HSL', function () {

		it('should convert rgb( 0, 172, 236 ) to hsl( 196, 100, 46 )', function ( done ) {

			var response = cvert.rgb_to_hsl( 0, 172, 236 );

			// test the response
			response.h.should.equal( 196 );
			response.s.should.equal( 100 );
			response.l.should.equal( 46 );

			// finished with the test.
			done();

		});

	});



	// Test the HSV conversion
	describe('to HSV', function () {

		it('should convert rgb( 0, 172, 236 ) to hsv( 196, 100, 92 )', function ( done ) {

			var response = cvert.rgb_to_hsv( 0, 172, 236 );

			// test the response
			response.h.should.equal( 196 );
			response.s.should.equal( 100 );
			response.v.should.equal( 92 );

			// finished with the test.
			done();

		});

	});



	// Test the Hex Conversion
	describe('to Hex', function () {

		it('should convert rgb( 0, 172, 236 ) to hex( #00a0e0 )', function ( done ) {

			var response = cvert.rgb_to_hex( 0, 172, 236);

			// check the response.
			response.should.equal( "#00acec" );

			// test finished
			done();

		});

	});


});

