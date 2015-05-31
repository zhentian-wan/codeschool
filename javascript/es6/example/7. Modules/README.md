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
```
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

```
var Employee = require("./Employee").Employee;

var e = new Employee("Wan");
```

## AMD (requireJS)

Using `define` keyword.
`define(function(){...})` is similar to IIFE, the difference between those tow is `define()` does not run immediately.
`define([<filename>], function(<class_name>){})`
```
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

```
define(["employee"], function(Employee){
	var e = new Employee("Wan");
});
```

## ES6 Modules

Using `export` and `import` keywords.

```
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