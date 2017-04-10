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

function getProfileSync(assignListId) {
  var assignList = readDocument('assignList', assignListId);
  assignList.assignment = assignList.assignment.map((id) => readDocument('users', id));
  assignList.assignment.forEach((assignData) => {
    assignData.assignId = readDocument('users', assignList.assignmnet.assignId);
  });
  return assignList;
}

export function getProfileData(user, cb) {
  // Get the User object with the id "user".
  var userId = readDocument('users', user);
  // Get the Feed object for the user.
  var profData = readDocument('users', userId.contents);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  profData.contents = profData.contents.map(getProfileSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(profData, cb);
}
