#Object

###Object.is()

```js
Object.is(1,2); //false 

expect(-0 === 0).toBe(true);
expect(Object.is(0,-0)).toBe(false);

expect(NaN === NaN).toBe(false);
expect(Object(NaN, NaN)).toBe(true);
```


### Object.assign()

```js
var shark = {
	bite: function(target) {
		target.hurt = true;
	}
}

var person = {}

var laser = {
	pewpew: function(target){
		target.exploded = true;
	}
}

Object.asign(shark, laser); // laser obj is assiggned to shark
//Object.asign(shark, laser, mixin2, ...); // can assign more than one objs

shark.pewpew(person); //shark has pewpew function now
expect(person.exploded).toBe(true);
```


## Object Shorthand and Computed Properties

In ES5: 
```js
var model = 'Ford';
var year = 1969;

var Classic = {
	model: model,
	year: year
}
```

In ES6: 
```js
var model = 'Ford';
var year = 1969;

var Classic = {
	model,
	year
}
```

***

In ES5:
```js
var server = {
	getPort: function(){
	
	}
}
```

In ES6:
```js
var server = {
	getPort(){
	
	}
}
```

***

In ES5:
```js
function createSimpleObject(propName, propVal){
	var obj = {};
	obj[propName] = propVal;
	return obj;
}
```

In ES6:
```js
function createSimpleObject(propName, propVal){
	return {
		[propName]: propVal
	};
}

var simpleObj = createSimpleObject('color', 'red'); 
expect(simpleObj.color).toBe('red');
/*
	simipleObj: {
		color:  'red'
	}
*/
```

```js
	function createTriumvirate(first, second, third) {
		return {
			['member' + first.name]: first,
			['member' + second.name]: second,
			['member' + third.name]: third
		}
		
		var Joe = {name: "Joe"};
		var Raply = {name: "Raply"};
		var Harry = {name: "Harry"};
		
		var tri = createTriumvirate(Joe, Raply, Harry);
		expect(tri.member_Joe).toBe(Joe);
	}
```