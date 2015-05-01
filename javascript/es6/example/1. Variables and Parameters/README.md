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

```
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
```

# Destructuring

See links:
* [08. Destructuring Assignment -- 1](http://www.cnblogs.com/Answer1215/p/4111895.html)
* [09. Destructuring Assignment -- 2](http://www.cnblogs.com/Answer1215/p/4111902.html)

```
describe("destructing", function(){
	
	it("can destruct an array", function(){
		
		var doWork = function(){
			return [1,2,3];
		};
		
		let [, x, y, z] = doWork();
		
		expect(x).toBe(2); //true
		expect(y).toBe(3); //true
		expect(z).toBeUndefined(); //true
	});
	
	it("can destructure objects", function(){
		
		let doWork = function(){
			
			return {
				firstName: "John",
				lastName: "Allen",
				handles: {
					twitter: "Code"
				}
			};
		};
		
		let { firstName, handles: {twitter} } = doWork();
		
		expect(firstName).tobe("John");
		expect(twitter).toBe("Code");
	});
	
	it("Work with parameters", function(){
	
		let doWork = function(url, { data, cache }){
			return data;
		};
		
		let result = doWork(
			"api/test", {
				data: "test",
				cache: false
			}
		);
		
		expect(result).toBe("test");
	});
});
```

# Default Paramters

Link: 
* [07. Default Value for function param](http://www.cnblogs.com/Answer1215/p/4109677.html)


# Default Parameters

```
it("will provide a value for undefined", function(){
	
	let doWork = function(a = 1, b = 2, c = 3){
		return [a,b,c];
	};
	
	let [a,b,c] = doWork(5, undefined);
	
	expect(a).toBe(5);  //true
	expect(b).toBe(2);  //true
	expect(c).toBe(3);  //true
});

it("works with destructuring", function(){

	let doWork = function(
		url,
		{data = "Scott", cache = true}
	){
		return data;
	};
	
	let result = doWork(
		"api/test", {
			cache: false
		}
	);
	
	expect(result).toBe("Scott);
});
```

# Rest params

In ES5, when you don't know how many paramters will be passed in, you can use **arguments**:
```
let sum = function(){
	let result = 0;
	for(let i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}

let result = sum(1,2,3);
```

In ES6, you can use Rest params:
```
let sum = function(...numbers){
	
	let result = 0;
	for(let i = 0; i < numbers.length; i++){
		result += numbers[i];
	}
	return result;
};
```

```
describe("rest paramters", function(){

	it("is like varargs", function(){
	
		let doWork = function(name, ...numbers){
		
			let result = 0;
			numbers.forEach(function(n){
				result += n;
			});
			
			return result;
		};
		
		let result = doWork("Scott", 1,,2,3);
		expect(result).toBe(6);
	});
});
```

# ...Spread

It looks the same as Rest Parameters, Spread uses to spread an array.

```
it("should sum up", function(){
	let doWork = function(x,y,z){
		return x+y+z;
	};
	
	expect(doWork(...[1,2,3])).toBe(6);
});
```

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
            let a = [4,5,6];
            let b = [1,2,3, ...a, 7,8,9];
            document.write(b); //1,2,3,4,5,6,7,8,9
      </script>
  </body>
</html>
```

# Template Literals

In ES5:
```
let category = "music";
let id = 2122;

let url = "http://apiserver/" + category + "/" + id;
```

In ES6:
```
let category = "music";
let id = 2122;

let url = `http://apiserver/${category}/${id}`;
```

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
	let upper = function(strings, ...values){
		let result = "";
		for(var i = 0; i < strings.length; i++){
			result += strings[i];
			if(i < values.length){
				result += values[i];
			}
		}
		return  result.toUpperCase();
	};
	
		var x = 1;
		var y = 3;
		var result = upper `${x} + ${y} is ${x+y}`;
		
		document.write(result); // 1 + 3 IS 4
      </script>
  </body>
</html>
```

More:
[11. String Templates](http://www.cnblogs.com/Answer1215/p/4115528.html)