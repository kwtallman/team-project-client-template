import React from 'react';
import ReactDOM from 'react-dom';

var grumber = null;

var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "userName": "Cole",
      "accounts": 2,
      "assignList": 1,
      "userPass": "cuck",
      "email": "kyledumpman@dump.net"
    },
    "2": {
      "_id": 2,
      "userName": "Elliot",
      "accounts": 1,
      "assignList": 1,
      "userPass": "monkey",
      "email": "kyleshitman@shit.net"
    }
  },

  "accounts": {
    "1": {
      "type": [
      "Moodle",
      "Blackboard"
      ],
      "userEmail": "cole.arvid@something.edu",
      "password": "cmpsci326"
    },
    "2": {
      "type": [
        "OWL"
      ],
      "userEmail": "elliot.crunch@something.edu",
      "password": "crunchy"
    }
  },

  "assignList": {
    "1": {
      "_id": 1,
      "assignmnet": [
        {
        "assignId": 1,
        "dueDate": 1492041540,
        "course": "CmpSci326",
        "aLink": "https://moodle.umass.edu/"
        },
        {
        "assignId": 2,
        "dueDate": 1491523140,
        "course": "English101",
        "aLink": "https://uma.umassonline.net/"
        }
      ]
    },
    "2": {
      "_id": 2,
      "assignmnet": [
        {
        "assignId": 1,
        "dueDate": 1492041540,
        "course": "CmpSci326",
        "aLink": "https://moodle.umass.edu/"
        },
        {
        "assignId": 2,
        "dueDate": 1491523140,
        "course": "English101",
        "aLink": "https://uma.umassonline.net/"
        }
      ]
    }
  }
};

var data = JSON.parse(localStorage.getItem(grumber));
if (data === null) {
  data = JSONClone(initialData);
}

function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function readDocument(collection, id) {
  return JSONClone(data[collection][id]);
}

export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  data[collection][id] = JSONClone(changedDocument);
  localStorage.setItem(grumber, JSON.stringify(data));
}

export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

export function resetDatabase() {
  localStorage.setItem(grumber, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
