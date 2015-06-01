# Modules

## IIFE Module
```
(function(target){

	var privateDoWork = function(name){
		return name + " is working";
	};
	
	var Employee = function(name){
		this.name = name;
	};
	
	Employee.prototype = {
		doWork: function(){
			return privateDoWork(this.name);
		}
	}
}(window));
```


## CommonJS
Using `exports` keyword.
```js
var privateDoWork = function(name){
	return name + " is working";
};

var Employee = function(name){
	this.name = name;
};

Employee.prototype = {
	doWork : function(){
		return privateDoWork(this.name);
	}
}

exports.Employee = Employee;
```

```js
var Employee = require("./Employee").Employee;

var e = new Employee("Wan");
```

## AMD (requireJS)

Using `define` keyword.
`define(function(){...})` is similar to IIFE, the difference between those tow is `define()` does not run immediately.
`define([<filename>], function(<class_name>){})`

```js
//employee.js
define(function(){

	var privateDoWork = function(){
		...
	};
	
	var Employee = function(name){
		...
	};
	
	return Employee;
});
```

```js
define(["employee"], function(Employee){
	var e = new Employee("Wan");
});
```

## ES6 Modules

Using `export` and `import` keywords.

```js
export class Employee{

	constructor(name){
		this._name = name;
	}
	
	get name(){
		return this._name;
	}
	
	doWork(){
		return `${this._name} is working`;
	}
}
```

```
import {Employee} from './es6/employee';

var e = new Employee("Wan");
e.doWork();
```

## Multiple Exports

You can export multiple class, function or value from one js file

```js
export class Employee{
	...
	
	...
}

export let log = function(employee){
	console.log(employee.name);
}

export let defaultRise = 0.15;
```

You can import multiple modules also:
```js
import {Employee, log, defaultRise} from "./employee"
```

## One and Many Exports

#### default
If the whole js file only export one module, you can use `default` keyword.

```js
export default class Employee{

	constructor(name){
		this._name = name;
	}
	
	get name(){
		return this._name;
	}
	
	doWork(){
		return `${this._name} is working`;
	}
}
``` 

When you want to import it, you cannot use `{}` any more, but you can use:

```js
import em from "./employee";
```

Here I named it `em`, but you can name it everything as you wish.


#### module

If you js file contains many modules and you wish to use all of those, you can then use `module` keyword.

```js
export class Employee{
	...
	
	...
}

export let log = function(employee){
	console.log(employee.name);
}

export let defaultRise = 0.15;
```

When you import the module, you can do:

```js
module em from './employee';

var e = new em.Employee("Zhentian");
```

If console log this em object, you will find it use get() method in ES6 for you to access the object inside the file.


## Hiding the detail

Let's say we have another two files:

company.js
```js
import {Employee} from './employee';

export class Company {
	hire(...names) {
		this.employees = names.map(
			(n) => new Employee(n)
		);
	}
	
	doWork() {
		return [for(e of this.employees) e.doWork()];
	}
}
```

main.js
```js
import {Company} from './company';

var c = new Company();
c.hire('Zhentian', 'Joe', 'John', 'Ken', 'Eathen');
document.write(c.doWork());
```

In html, you ONLY need to import main file.
index.html
```html
<script type="module">
	import "./main.js";
</script>
```

Now when user visit index.html, it will load main.js, company.js then employee.js. But in the real app, we want to minimize the loader. 
you can do:

```
traceur --out build/app.js --experimental --modules app\employee.js
```

Then you can use requireJS to load modules.



