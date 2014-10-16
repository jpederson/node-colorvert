

var cvert = require( "../colorvert" ),
	should = require( "should" );


describe( 'Test Conversions: Lab', function(){

	// Test the Lab conversion
	describe('to CMYK', function () {

		it('should convert lab( 59, -37, -49 ) to cmyk( 100, 0, 0, 0 )', function ( done ) {

			cvert.lab_to_cmyk( 59, -37, -49, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.c.should.equal( 98 );
				response.m.should.equal( 9 );
				response.y.should.equal( 4 );
				response.k.should.equal( 0 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the RGB conversion
	describe('to XYZ', function () {

		it('should convert lab( 59, -37, -49 ) to xyz( 52, 71, 197 )', function ( done ) {

			cvert.lab_to_xyz( 59, -37, -49, function( err, response ) {

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

		it('should convert lab( 59, -37, -49 ) to rgb( 0, 160, 224 )', function ( done ) {

			cvert.lab_to_rgb( 59, -37, -49, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.r.should.equal( 0 );
				response.g.should.equal( 160 );
				response.b.should.equal( 225 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSL conversion
	describe('to HSL', function () {

		it('should convert lab( 59, -37, -49 ) to hsl( 197, 100, 43 )', function ( done ) {

			cvert.lab_to_hsl( 59, -37, -49, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.h.should.equal( 197 );
				response.s.should.equal( 100 );
				response.l.should.equal( 44 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the HSV conversion
	describe('to HSV', function () {

		it('should convert lab( 59, -37, -49 ) to hsv( 197, 100, 87 )', function ( done ) {

			cvert.lab_to_hsv( 59, -37, -49, function( err, response ) {

				// throw an error if it exists
				if ( err ) throw err;

				// test the response
				response.h.should.equal( 197 );
				response.s.should.equal( 100 );
				response.v.should.equal( 88 );

				// finished with the test.
				done();

			});

		});

	});



	// Test the Hex Conversion
	describe('to Hex', function () {

		it('should convert lab( 59, -37, -49 ) to hex( #00a0e0 )', function ( done ) {

			cvert.lab_to_hex( 59, -37, -49, function( err, response ) {

				// throw error if exists
				if ( err ) throw err;

				// check the response.
				response.should.equal( "#00a0e1" );

				// test finished
				done();

			});

		});

	});


});


