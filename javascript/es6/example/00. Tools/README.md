# Tools

## polyfills

Polyfill is something you don't need to set up traceur but start to use es6 in today's browser.
You can search for polyfill which you want to use on Goolge.

For example: I want to search for es6 array method from [https://github.com/rwaldron/es6-array-extras](https://github.com/rwaldron/es6-array-extras).

```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<script src="es6-array-extras.js"></script>
<script>
    var ary = Array.of(5);
    console.log(ary);
</script>
</body>
</html>
```

## ES-Next

[Esnext](https://github.com/esnext/esnext) is similar to traceur, you can use command line to compile files.

Install:

	npm install esnext -g
	
Here's how to compile a single file an print it to stdout:

	esnext myfile.js
	
To compile many files at once, specify an output directory:

	esnext -o build lib/**/*.js
	
To enable source maps for these files, add the **--source-maps** flag.

But esnext doesn't support as many es6 features as traceur, so it is not that popular.


## ES-shim

[ES-shim](https://github.com/paulmillr/es6-shim/) is different from traceur and esnext. It is a list of shim and polyfills which you can include and use in the browser.
So it is really easy to use.

Install:

	bower install es6-shim

## ES6 in Node

For Windows, need to install [nodist](https://github.com/marcelklehr/nodist) for node manager.

Usage:

	node --harmony --use-strict app.js 
	
