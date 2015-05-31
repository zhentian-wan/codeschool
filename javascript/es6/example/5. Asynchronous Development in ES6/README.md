# Promise

Problem with callback:
![](./images/1.png)

Beautify of Promise:
![](./images/2.png)


## Basic of Promise

```
var promise = new Promise(function(resolve, reject){
	resolve("foo");
});

promise.then(function(data){
	console.log(data); //"foo"
});
```

For Jasmine, you need to call done() funciton to tell the test finished.
```
describe('Promise', function(){

	it('should receive the resolved data', function(done){
		var promise = new Promise(function(resole, reject){
			setTimeout(function(){
				resolve(1);
			}, 1000);			
			
		});
		
		promise.then(function(data){
			expect(data).toBe(1);
			done();
		});
	});
})
```

### Reject

```
	it('should fail when rejected', function(done){
		var promise = new Promise(function(resole, reject){
			reject(Error('oh no!'));
		});
		promise.then(function(){
			// when success
		}, function(error){
			expect(error.message).toBe('oh no!');
			done();
		});
	});
```

##### catch()

Only catch reject()

```
	it('should have a catch', function(done){
		var promise = new Promise(function(resole, reject){
			reject(Error('oh no!'));
		});
		promise.catch(function(){
			expect(error.message).toBe('oh no!');
			done();
		});
	});
```

### Call promise inside another promise

```
it('should compose when resolved with a promise', function(done){
	var promiseOld = new Promise(function(resolve, reject){
		resolve(3);
	});
	
	var promiseNew = new Promise(function(resolve, reject){
		resolve(promiseOld);
	});
	
	promiseNew.then(function(data){
		expect(data).toBe(3);
		done();
	});
});
```

## Shortcut

```
it('should have a static resolve', function(done){
	var promsieOld = Promise.resolve(3);
	
	var promiseNew = Promise.resolve(promsieOld);
	promiseNew.then(function(data){
		expect(data).toBe(3);
	});
});

it('should have a static reject', function(done){
	var promise = Promise.reject(Error('oh no!'));
	promise.catch(function(error){
		expect(error.message).toBe('oh no!');
		done();
	})
})
```

## Async

```
it('should be asynchronous', function(done){
	var async = false;
	var promise = Promise.resolve();
	promise.then(function(){
		expect(async).toBe(true);
	});
	async = true;
});
```

## Advance Promise

### Chain the promise
```
function getOrder(orderId){
	return Promise.resolve({userId: 35});
}

function getUser(userId) {
	return Promise.resolve({companyId: 18});
}

function getCompany(companyId) {
	return Promise.resolve({name: 'AnswerTrip'});
}

it('should chain sequentially using then', function(done){

	getOrder(3).then(function(order){
		return getUser(order);
	}).then(function(user){
		return getCompany(user);
	}).then(function(){
		expect(company.name).toBe('AnswerTrip');
	}).catch(function(){
		//handle error
	});
});
```


### Return multi promises at the same time: all()

```
function getCourses(courseId){
	var courses = {
		1: {name: "Introduction to Cobol"},
		2: {name: "Yet Another C# Course"},
		3: {name: "How to make billions by bloggin"}
	};
	
	return Promise.resolve(courses[courseId]);
}


it('should execute after all promises with all result', function(done){

	var courseIds = [1,2,3];
	var promises =[];
	for(var i = 0; i< counrseIds,length; i++){
		promises.push(getCourses(courseIds[i]));
	}
	Promise.all(promises).then(function(values){
		expect(values.length).toBe(3);
		done();
	});
});
```


### Resolve the other promises after the first promise resolved: race()

```
it('should resolve after the first promise', function(done){
	var courseIds = [1,2,3];
	var promises =[];
	for(var i = 0; i< counrseIds,length; i++){
		promises.push(getCourses(courseIds[i]));
	}
	Promise.race(promises).then(function(firstVal){
		expect(values.length).toBeDefined();
		done();
	});
});
```


