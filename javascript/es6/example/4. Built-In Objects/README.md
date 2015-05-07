# Build-in Object
 
##Number

```
describe("Numbers", function(){

	it("Should easily mistake numbers with leading zeros", function(){
		//For example, in ES5 if you write 71 as 071, it would be a octal number, the real value is 57
		var octal = 071;
		expect(parseInt(octal)).toBe(57);
	});
	
	it("ES6 should support octal literals", function(){
		var octal = 0o71;  //leading 0o
		expect(octal).toBe(57);
	});
	
	it("should parse octal values with Number function", function(){
		var octNum = Number("0o71");
		expect(octNum).toBe(57);
	});
	
	it("should parse binary values with Number function", function(){
		var binNum = Number("0b101");  //leading 0b
		expect(binNum).toBe(5);
	});
	
	//parseInt and parseFloat in ES6 is the method of Number object, no global function any more
	it("Should expose parseInt and parseFloat", function(){
		expect(Number.parseInt("3").toBe(3));
		expect(Number.parseFloat("3.5").toBe(3.5));
	});
	
	it("should not conver strings when calling Number.isFinite vs global", function(){
		expect(isFinit("3").toBe(true)); 
		expect(Number.isFinit("1").toBe(false));
	});
	
	it("should not conver strings when calling Number.isNaA vs global", function(){
		expect(isNaN("NaN").toBe(true)); 
		expect(Number.isNaN("NaN").toBe(false));
	});	
	
	it("should correctly detect integers with isInteger", function(){
	
		//new function
		expect(Number.isInteger(1).toBe(true));
		expect(Number.isInteger(1.0).toBe(true));
		expect(Number.isInteger(1.5).toBe(false));
	});
	
	it("should expose max and min safe integer constants", function(){
		//In ES5
		expect(Math.pow(2,53)).toBe(Math.pow(2,53)+1); //true ....
		expect(Math.pow(2,53)+3).toBe(Math.pow(2,53)+9); //true
		
		//In ES6
		expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2,53)-1);
		expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2,53)*-1+1);
	});
	
	it("should indicate safe integers with isSafeInteger", function(){
		expect(Number.isSafeInteger(9007199254740991)).toBe(true);
		expect(Number.isSafeInteger(9007199254740992)).toBe(false);
	});
})
```