import {readDocument, writeDocument, addDocument} from './database.js';


/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 1);
}

export function newAssign(userId, deadline, identifier, cb) {
  sendXHR('POST', '/user/' + userId + '/assignList/', {
    "title": identifier,
    "end": deadline
  }, (xhr) => {
    cb(JSON.parse(xhr.responseText));
  });
}

function getProfileSync(feedItemId) {
  var acc = readDocument('accounts', accID);
  // Resolve 'like' counter.
  //acc.likeCounter =
    //feedItem.likeCounter.map((id) => readDocument('users', id));
  // Assuming a StatusUpdate. If we had other types of
  // FeedItems in the DB, we would
  // need to check the type and have logic for each type.
  acc.userEmail =
    readDocument('users', acc.userEmail);
  // Resolve comment author.
  //feedItem.comments.forEach((comment) => {
    //comment.author = readDocument('users', comment.author);
  //});
  return acc;
}

export function getProfData(user, cb) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  userData.contents.first = readDocument('users', user.contents.first);
  userData.contents.username = readDocument('users', user.contents.username);
  userData.contents.email = readDocument('users', user.contents.email);
  // Get the Feed object for the user.
  //var profData = readDocument('accounts', userData.account);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  //profData.userEmail = profData.userEmail.map(getProfileSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(userData.contents, cb);
}

function getAssign(assignId) {
  var assignList = readDocument('assignList', assignListId);
  assignList.assignment = assignList.assignment.map((id) => readDocument('users', id));
  assignList.assignment.forEach((assignData) => {
    assignData.assignId = readDocument('users', assignList.assignmnet.assignId);
  });
  return assignList;
}

//FOR MONGO (LATER)
// db.collection('assignments').findOne({
//   _id: assignID,
//   "contents.author": fromUser
// }, function(err, assignment) {
//   if (err) {
//     return sendDatabaseError(res, err);
//   } else if (assignment === null) {
//     return res.status(400).end();
//   }

//PUT methods for organization
/*
app.put('/AddAssignment/:getAssign/content', function(req, res) {
  var fromUser = new ObjectID(getUserIdFromToken(req.get('Authorization')));
  var assignId = new ObjectID(req.params.assignId);
}

app.put('/Profile/:getProfileData/content', function(req, res) {
    var fromUser = new ObjectID(getUserIdFromToken(req.get('Authorization')));
    //var for each component (name, username, email, password)

}*/

//Going to need to get the token for user 1
//var token = ''; // <-- Put your base64'd JSON token here
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  //xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
