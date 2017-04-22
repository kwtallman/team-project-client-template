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

export function NewAssign(assignListId, userId, cb) {
  var assignListOb = readDocument('assignList', assignListId);
  // Normally, we would check if the user already liked this comment.
  // But we will not do that in this mock server.
  // ('push' modifies the array by adding userId to the end)
  feedItem.likeCounter.push(userId);
  writeDocument('assignList', assignListOb);
  // Return a resolved version of the likeCounter
  emulateServerReturn(assignList.likeCounter.map((userId) => readDocument('users', userId)), cb);
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
  // Get the Feed object for the user.
  var profData = readDocument('accounts', userData.account);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  profData.userEmail = profData.userEmail.map(getProfileSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(profData, cb);
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
