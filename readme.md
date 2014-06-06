## colorvert [![NPM version](https://badge.fury.io/js/colorvert.svg)](http://badge.fury.io/js/colorvert)

An easy-to-use color conversion module written for node. Uses the [transicc](https://github.com/jpederson/node-transicc) node module to provide ICC profile-based color conversions between several color spaces. If you only need conversions between ICC profiles (CMYK, Lab, XYZ, and RGB), look to that module.

Otherwise, you found the right module! This one also supports Hex, HSL, and HSV, so you can convert between web, print, and display colorspaces.

*****

### Installation Requirements

You must first install LittleCMS, an open source library written mostly in C for converting colors using ICC profiles. This shell script will get you there.

```shell
git clone https://github.com/mm2/Little-CMS.git
cd Little-CMS
./configure 
make 
make check 
sudo make install
```

Once you've installed that dependency, you're ready to install colorvert and get goin'!

```shell
npm install colorvert --save
```

*****

### Quick Examples

```js
var cvert = require( "colorvert" );

// CMYK, XYZ, and Lab-based conversions require
// you to provide a callback function.
cvert.cmyk_to_rgb( 100, 0, 0, 0, function( rgb ){
	console.log( rgb );
});

// RGB, HSL, HSV, and hex conversions simply 
// return values.
var hex = cvert.rgb_to_hex( 0, 146, 210 );
```

*****

### Single Conversion

If you only need to convert from one color to another, just include that specific conversion module - it'll keep node from caching extra modules it won't need. Here's an example:

```js
var cmyk_to_hex = require( "colorvert/cmyk/hex" );

cmyk_to_hex( 100, 0, 0, 0, function( hex ){
	console.log( hex );
});
```

*****

### CMYK, Lab & XYZ Conversions

These conversions require us to use the `transicc` node module that interacts with a command line utility. As a result, we have to wait for the response before doing anything with it, so you must provide a callback when converting **to or from** any of these formats. Here's an example:

```js
cvert.cmyk_to_rgb( 100, 0, 0, 0, function( rgb ){
	console.log( rgb );
})
```

*****

### Math-only Conversions

If you're converting between RGB, HSL, HSV, or hex, the functions will simply return the value for you to use right away. Here's how that'll look.

```js
var hex = cvert.rgb_to_hex( 0, 146, 210 );
console.log( hex );
```

*****

### Warning! :)

This and the colorvert API module are still under development. They currently function for perfect input, but as soon as an empty/invalid value is passed, things fall apart, so I have to do some input testing/error reporting and write thorough tests before anyone should use it. You've been warned :) Otherwise, feel free to run it locally if you need to batch convert colors and you know the input will be valid!
