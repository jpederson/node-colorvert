## colorvert

An easy-to-use color conversion module written for node. Uses the `transicc` node module to provide ICC profile-based color conversions between several color spaces spaces. 

*****

### Installation Requirements

You must first install LittleCMS, an open source Python library for converting colors using ICC profiles. This shell script will get you there.

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
