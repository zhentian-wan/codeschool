# Express

* **You should never forget to do validation first!**

* About response.send() 

`response.send()`, it helps to set the header and decides the format. So no matter you want to return html code or json data, still use response.send() should be ok in most of case.
`response.json()`, send back json format, it does the same work as send() but still for json data.

* About express.static()

This is a middleware

    app.use(express.static('pulic'))
	
Static middleware serving files from the **public** folder.
Normally you want to put this into express.js file, which related to the settings of express.

Once use this middleware, let's say you have jquery.js and client.js in public folder:
You can includes those files by using: 
```
<script src="jquery.js"></script>
 <script src="client.js"></script>	
```

* About EventEmitter on the response object

```
module.exports = function(request, response, next){
	var start = +new Date();
	var stream = process.stdout;
	var url = request.url;
	var method = request.method;
	
	response.on('finish', function(){
		...
	});
	
	next();
}
```

The **finish** event is emitted when the response has been handed off to the OS.
Event handle function runs asynchronously.


* About query parameters

If you have a GET request from client, 

     http://example.com/course?limit=5
	 
you can use 

     request.query.limit
	 
to get the parameter.

* About fixable router params name

For example, there is a request:

     '/cities/:name'
	 
We want to find this city by name. User may type 'Helsinki', 'helsinki'  or 'HELSINKI'.
If we use:

```
	  var cities = {
		'Helsinki': info: {...},
		'Shanghai': info: {...},
		'New York': info: {...}
	  } 
	  app.get('/cities/:name', function(res, req){
			
			var name = cities[req.params.name];
	  })
```

Clearly, 'HELSINKI' and 'helsinki' won't work.
TO fix this problem we can do something like:
```
app.get('/cities/:name', function (request, response) {
  var cityName = parseCityName(request.params.name);
	cityInfo = cities[cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
});

function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}
```

* About **app.param()**

But if in our application, we have many places would use name parameter, like username, location name and so on...
We don't want to copy and paste. Then we can use app.param() to make our code lot more DRY.

```
app.param('name', function(req, res, next){
	req.justfiyName = jsutfiyName(req.params.name);
	next();
});

app.get('/cities/:name', function(req,res,next){
	var cityName = req.justfiyName;
	var cityInfo = cities[cityName];
	
	if(cityInfo){
		res.send(cityInfo);
	}else{
		res.status(404).json({error: "Cannot find the city"});
	}
});

app.get('/users/:name', function(req,res,next){
	var userName = req.justfiyName;
	var userInfo = cities[userName];
	
	if(cityInfo){
		res.send(userInfo);
	}else{
		res.status(404).json({error: "Cannot find the user"});
	}
});

function jsutfiyName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}
```

Here we create a new property called `justfiyName` inside `request` object. Then we can access this justfiyName from everywhere.


* About sendStatus()

Set the response HTTP status code to statusCode and send its string representation as the response body. This is useful for jQuery which not handle the empty json well.

```
res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
```

[List of status code](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

* Route Model
routes.js
```
    /*
    * User route
    * */
    app.use('/api/users', usersBlock);

    /*
    * Course route
    * */
    app.use('/api/courses', coursesBlock);


    //Set route for partials
    //When request comes for main partials, it will look for server/views/partials/mian
    app.get('/partials/*', function(req,res) {
        res.render('../../public/app/' + req.params[0]);
    });
```

routers/User.js
```
var express = require('express'),
    router = express.Router(),
    auth = require('../config/auth'),
    users = require('../controller/usersController');

router.route('/')
    .get(auth.requireRole('admin'), users.getUsers)
    .post(users.createUser)
    .put(users.updateUser);

router.route('/:id')
    .delete(users.deleteUserById);

module.exports = router;
```


