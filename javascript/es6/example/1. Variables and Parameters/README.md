#'var' and 'let'

The main difference between 'var' and 'let' is on block scope.
'var' doesn't have block scope. 

There are tow scope in es5: global scope and function scope.
So in es6, there are three scopes: global scope, function scope and block scope.

For example: 

**if block**: 
```
describe("if block", function(){
	it("var should return 3", function(){
		
		var doWork = function(flag){
			
			if(flag){
			
				var x = 3;
			}
			
			return x;
		};
		
		expect(doWork(true).toBe(3));  // true
	});
	

	it("var should return 3", function(){
		
		var doWork = function(flag){
			
			if(flag){
			
				let x = 3;
			}
			
			return x;
		};
		
		expect(doWork(true).toBe(3));  // false, x is undefined
	});	

});
```

**for block**:
```
describe("for block", function(){
	it("var should return 3", function(){
		
		var doWork = function(){
			
			for(var i = 0 ; i < 10; i++){
				
			}
			
			return i;
		};
		
		expect(doWork(true).toBe(10));  // true
	});
	

	it("var should return 3", function(){
		
		var doWork = function(){

			for(let i = 0 ; i < 10; i++){
				
			}
			
			return i;
		};
		
		expect(doWork(true).toBe(10));  // false, i is undefined
	});	

});
```

#### More about let

* [Let 1](http://www.cnblogs.com/Answer1215/p/4109464.html)
* [Let 2: Fiald case](http://www.cnblogs.com/Answer1215/p/4109489.html)
* [Let 3: Block Scope](http://www.cnblogs.com/Answer1215/p/4109521.html)


## CONST

'const' keyword is for creating a **read only** variable, something you can never change once created.
'const' likes 'let' keyword alos has block scope.

describe("using const", function(){

	it("will make a variable read-only", function(){
	
		const MAX_SIZE = 10;
		
		//MAX_SIZE = 12; //SyntaxError
		
		expect(MAX_SIZE).toBe(10);  //true
	});
	
	it("can shadow outer declaration", function(){
		
		const x = 12;
		var doWork = function(){
			
			let x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);  //true
		expect(x).toBe(12); //true
	});
	
	it("const also has block scope", function(){
		
		if(true){
			const x = 12;  //SyntaxError, x is not defined
		}
		
		var doWork = function(){
			
			let x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);  //true
		expect(x).toBe(12); //true
	});	
});
