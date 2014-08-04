## colorvert [![NPM version](https://badge.fury.io/js/colorvert.svg)](http://badge.fury.io/js/colorvert)

This node module converts colors between CMYK, Lab, XYZ, RGB, HSL, HSV, and Hex colorspaces. Colorvert uses the [transicc](https://github.com/jpederson/node-transicc) node module to provide ICC profile-based color conversions between several color spaces. If you only need conversions between ICC profiles (CMYK, Lab, XYZ, and RGB), look to that module.

*For a JSON HTTP API:* Check out the [colorvert-api](https://github.com/jpederson/node-colorvert-api) node module. It uses this module and [express](https://github.com/strongloop/express) to serve HTTP endpoints that convert the input color to all other colorspaces. It's ideal for batch color conversions.

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
cvert.cmyk_to_rgb( 100, 0, 0, 0, function( err, rgb ){
	console.log( rgb );
});

// RGB, HSL, HSV, and hex conversions simply 
// return values.
var hex = cvert.rgb_to_hex( 0, 172, 236 );
```

*****

### Single Conversion

If you only need to convert from one color to another, just include that specific conversion module - it'll keep node from caching extra modules it won't need. Here's an example:

```js
var cmyk_to_hex = require( "colorvert/cmyk/hex" );

cmyk_to_hex( 100, 0, 0, 0, function( err, hex ){
	console.log( hex );
});
```

*****

### CMYK, Lab & XYZ Conversions

These conversions require us to use the `transicc` node module that interacts with a command line utility. As a result, we have to wait for the response before doing anything with it, so you must provide a callback when converting **to or from** any of these formats. Here's an example:

```js
cvert.cmyk_to_rgb( 100, 0, 0, 0, function( err, rgb ){
	console.log( rgb );
});
```

*****

### Math-only Conversions

If you're converting between RGB, HSL, HSV, or hex, the functions will simply return the value for you to use right away. Here's how that'll look.

```js
var hex = cvert.rgb_to_hex( 0, 146, 210 );
console.log( hex );
```

*****

### Convert to ALL Other Colorspaces

Each of the colorspaces includes a module that converts to all other colorspaces. As a bonus, the output will also include the hex code of the inverted color, and will suggest the most readable text color to display over the input color. Use it like so:

```js
cvert.cmyk_to_all( 100, 0, 0, 0, function( err, all ){
	console.log( all );
	/*
	Outputs:
	{
		"cmyk": {
			"c": "100",
			"m": "0",
			"y": "0",
			"k": "0"
		},
		"lab": {
			"l": 59,
			"a": -37,
			"b": -49
		},
		"hex": "#00a0e0",
		"hex_inverted": "#ff5f1f",
		"hex_readable": "#ffffff",
		"hsl": {
			"h": 197,
			"s": 100,
			"l": 43
		},
		"hsv": {
			"h": 197,
			"s": 100,
			"v": 87
		},
		"rgb": {
			"r": 0,
			"g": 160,
			"b": 224
		},
		"xyz": {
			"x": 52,
			"y": 71,
			"z": 197
		}
	}
	*/
});
```

*****

### Warning! :)

This module has been pretty reliable during all my tests and with everything I've thrown at it. That said, I haven't written tests for everything yet, so be sure to test it in your environment and with your input - if you find any issues, please post them on Github or submit a pull request!
