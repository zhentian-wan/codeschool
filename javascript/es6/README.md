#ES6

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
