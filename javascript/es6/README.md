#ES6

##CONTENT

* [Tools](./example/00. Tools/README.md)
* [Variables and Parameters](./example/1. Variables and Parameters/README.md)
* [Class](./example/2. Class/README.md)
* [Function Programming](./example/3. Functional Programming/README.md)
* [Built-In Objects](./example/4. Built-In Objects/README.md)
* [Asynchronous Development in ES6](./example/5. Asynchronous Development in ES6)
* [Builded-in Object](./example/6. Builded-in Object)
* [Modules](./example/7. Modules)

## Introduction

### Try ES6

Can use [Plunker](http://plnkr.co/edit/gKFHfsetX9LLpmzTJ42f?p=preview) to try out es6 online.

```
<!DOCTYPE html>
<html>
  <head>
    <script data-require="traceur@*" data-semver="0.0.0-20140302" src="https://traceur-compiler.googlecode.com/git/bin/traceur.js"></script>
    <script>
      traceur.options.experimental = true;
    </script>
    <script data-require="traceur@*" data-semver="0.0.0-20140302" src="https://traceur-compiler.googlecode.com/git/src/bootstrap.js"></script>
    
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>

  <body>
    <script type="module">
     let add = (x,y) => x+y;
     document.write(add(1,2));
    </script>
  </body>
</html>
```

* Need to include:

        traceur.options.experimental = true;

so the 'let' can work.

* scirpt type="module",  because we want use traceur to translate es6 to es5.

### Compatibility

You can use this [table](https://kangax.github.io/compat-table/es6/) to check which tool support which feature in es6.

### Enable Chrome flags

In the address type:

       chrome://flags/
  
Seach for 'javascript', then enable the 'Enable Experimental JavaScript Mac, Windows, Linux, Chrome OS, Android'.

###HELP Repo

When you want to get started, go for this [repo](https://github.com/joeeames/ES6FundamentalsCourseFiles).
