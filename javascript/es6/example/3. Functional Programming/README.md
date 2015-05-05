# Functional Programming

## Arrow Functions

No need function, return keyword, {}. 
```
// When there are more than one param, we need ()
let add =  (x, y) => x+ y;
let three = () => 3;
// When there is only one param, we can skip ()
let square = x => x * x;
// When we have mutli lines, we do need {}
let subtraction = (x, y) => {
	let temp = x - y;
	return temp;
}
expect(add(3,5)).toBe(8);
expect(square(3)).toBe(9);
expect(three()).toBe(3);
expect(subtraction(5,3)).toBe(2);
```

```
it("can be used with array methods", function(){
	
	var numbers = [1,2,3,4];
	
	var sum = 0;
	numbers.forEach(n => sum += n;);
	expect(sum).toBe(10);
	
	var doubled = numbers.map(n => n * 2);
	expect(doubled).toEqual([2,4,6,8]);
})
```


## Arrows and Asynch

Many times you would need callback function, one painful thing is **this** keyword.

If in ES5
```
it("It will fail in ES5 ", function(done){
	
	//this bind to jasmine global scope
	this.name = "Wan";
	setTimeout(function(){
		//here this bind to this callback function
		epxect(this.name).toBe("Wan");
		done();  //call done() to tell jasmine, the test is over
	}, 15);
})
```

We can solve this problem use this way in ES5:
```
it("It will fail in ES5 ", function(done){
	var self = this;
	self.name = "Wan";
	setTimeout(function(){
		epxect(self.name).toBe("Wan");
		done();  
	}, 15);
})
```

Use arrow function, we not longer need to worry about the this:
```
it("It will work in ES6", function(done){
	this.name = "Wan";
	setTimeout(() => {
		expect(this.name).toBe("Wan");
		done();
	})
})
```


