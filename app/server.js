import {readDocument, writeDocument, addDocument} from './database.js';


/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
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

function getProfileSync(assignListId) {
  var assignList = readDocument('assignList', assignListId);
  assignList.assignment = assignList.assignment.map((id) => readDocument('users', id));
  assignList.assignment.forEach((assignData) => {
    assignData.assignId = readDocument('users', assignList.assignmnet.assignId);
  });
  return assignList;
}

export function getProfileData(user, cb) {
  var userId = readDocument('users', user);
  var profData = readDocument('users', userId.contents);
  profData.contents = profData.contents.map(getProfileSync);
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
