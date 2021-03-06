# Classes

### Why Classes?

It is much clean and easy to be adopted by the programmer from Java, c#, c++ & ObjectC.
**In ES5:**
```
var Employee = function(){
	
};

Employee.prototype={
	doWork: function(){
		return "OK";
	}
	
	getName: function() {
		return "Scott";
	}
};

var e = new Employee();
expect(e.doWork()).toBe("OK");
expect(e.getName()).toBe("Scott");
```

**In ES6:**
```
class Employee{
	doWork(){
		return "OK";
	}
	
	getName(){
		return "Scott";
	}
}

var e = new Employee();
expect(e.doWork()).toBe("OK");
expect(e.getName()).toBe("Scott");
expect(Employee.prototype.doWork.call(e)).toBe("OK");
```

### constructor
Every time **new** a class, constructor will be called.
```
class Employee{

	constructor(name){
		this._name = name;
	}

	doWork(){
		return "OK";
	}
	
	getName(){
		return this._name;
	}
}

let e1 = new Employee("Scott");
let e1 = new Employee("Alex");
```

### get and set

```
class Employee {

	constructor(name){
		//this._name = name;
		this.name = name;  // this will call the set name function
	}
	
	get name(){
		return this._name.toUpperCase();
	}
	
	set name(newValue){
		if(newValue){
			this._name = newValue;
		}
	}
}

let e1 = new Employee("Scott");
let e1 = new Employee("Alex");

expect(e1.name).toBe("SCOTT");

e1.name = "Chris";
expect(e1.name).toBe(CHRIS); // need 'set'
```

### Inheritance

Use **extends** keyword for inheritance. By default all the class we defined, it will extends **object** class.

```
describe("inheritance person", function(){
	class Person {

		constructor (name){
			this.name = name;
		}
		
		get name(){
			return this._name;
		}
		
		set name(name){
			this._name = name;
		}
	}

	class Employee extends Person{
		
		doWork(){
			return `${this._name} is working`;
		}
	}
	
	let p1 = new Person("Wan");
	let e1 = new Employee("Feng");
	
	expect(p1.name).toBe("Wan");
	expect(e1.name).toBe("Feng");
	expect(e1.doWork()).toBe("Feng is working");
});
```

### Super

What if for 'Employee' class, when we init it, we also want to pass a title prop.

	let e1 = new Employee("Developer","Feng");
	
Because currently 'Employee' class doesn't have **constructor** function, so it will call **Person** class's constructor function.
So it assign the "Developer" to the this._name and that will cause problem.

So we can add a constructor function for the Employee class.
```
	class Employee extends Person{
	
		constructor(title, name){
			this._title = title;
			this._name = name;  // Not good enough
		}
		
		doWork(){
			return `${this._name} is working`;
		}
	}
```

Notice that we are DRY here:

	this._name = name;
	
There is a better way to do this:
```
	class Employee extends Person{
	
		constructor(title, name){
			this._title = title;
			//this._name = name;  // Not good enough
			super(name);
		}
		
		doWork(){
			return `${this._name} is working`;
		}
	}
```
**super(name)** will call the same function (constructor) in Person class.
So the name prop can be set also.

#### super.doWork()

You can also invoke any function in super class by using:

	super.<fundtion_name>();


### Overrides

The child class can override the parent class's methods.

```
describe("Override", function(){
	class Person{

		constructor(name){
			this.name = name;
		}
		
		get name(){
			return this._name;
		}
		
		set name(name){
			this._name = name;
		}
		
		doWork(){
			return "free";
		}
		
		//Override the Object class toString method
		toString(){
			return this.name;
		}
	}

	class Employee{

		constructor(title, name){
			super(name);
			this.title = title;
		}
		
		get title(){
			return this._title;
		}
		
		set title(title){
			this._title = title;
		}
		
		//Override Person class doWork method
		doWork(){
			return "paid";
		}
		
		//Override Person class toString method
		toString(){
			return this.name - this.title;
		}
	}	
	
	let e1 = new Employee("Developer", "Alex");
	let p1 = new Person("John");
	
	expect(e1.doWork());.toBe("paid");
	expect(p1.doWork()).toBe("free");
	expect(p1.toString()).toBe("John");
	expect(e1.toString()).toBe("Alex - Developer");
	
	// use Rest parameters
	let makeEveryoneWork = function(...people){
		var results = [];
		for(var i = 0; i < people.length; i++){
			/*
			//Check there is a doWork method
			if(people[i].doWork()){
				results.push(people[i].doWork());
			}*/

			//Better way, because Employee extend Person, so if it is Person instance, then the test should pass. 
			if(people[i].instanceof.Person){
				results.push(people[i].doWork());
			}
		}
		return results;
	}
	
	expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "paid"]);
});
```

	

