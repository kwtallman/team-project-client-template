//import express module
var express = require('express');
//import JSON body parser
var bodyParser = require('body-parser');
//import database functions
var database = require('./database');


var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection  = database.getCollection;


var app = express();

var validate = require('express-jsonschema').validate;

app.use(bodyParser.text());
app.use(bodyParser.json());
//pull static contends from build
app.use(express.static('../client/build'));

//posts a new assignment
app.post('/user/:userid/assignList/', function(req, res){
    var userId = parseInt(req.params.userid, 10);
    var body = req.body;
    var user = readDocument('users', userId);
    var assignList = readDocument('assignList', user.assignList);

    var newAssignment = {
      "title": body.title,
      "start": new Date(2000, 1, 1),
      "end": body.end
    }

    assignList.assignment.push(newAssignment);
    writeDocument('assignList', assignList);
    res.send(assignList.assignment);
});

//gets a users assignments
app.get('/user/:userid/assignlist/', function(req, res){
  var userid = parseInt(req.params.userid, 10);
  var user = readDocument('users', userid);
  var assignList = readDocument('assignList', user.assignList);
  res.send(assignList);
});

//gets a user
app.get('/user/:userid/', function(req, res){
  var userid = parseInt(req.params.userid, 10);
  res.send(readDocument('users', userid));
});


//Reset database.
app.post('/resetdb',function(req,res) {
  console.log("Resetting database");
  database.resetDatabase();
  res.send();
});


//Translate JSON Schema Validation failures into error 400s.
app.use(function(err, req, res, next) {
  if (err.name === 'JsonSchemaValidation') {
    // Set a bad request http response status
    res.status(400).end();
  } else {
    // It's some other sort of error; pass it to next error middleware handler
    next(err); }
  });

  function getUserIdFromToken(authorizationLine) {
    try {
      // Cut off "Bearer " from the header value.
      var token = authorizationLine.slice(7);
      // Convert the base64 string to a UTF-8 string.
      var regularString = new Buffer(token, 'base64').toString('utf8');
      // Convert the UTF-8 string into a JavaScript object.
      var tokenObj = JSON.parse(regularString);
      var id = tokenObj['id'];
      // Check that id is a number.
      if (typeof id === 'number') {
        return id;
      } else {
        // Not a string. Return "", an invalid ID.
        return "";
      }
    } catch (e) {
      // Return an invalid ID.
      return -1;
    }
  }

  // listening on port 3000
  app.listen(3000,function() {
    console.log('Example app listening on port 3000');
  });
  // Implement your server in this file.
  // We should be able to run your server with node src/server.js
