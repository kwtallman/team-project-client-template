import React from 'react';
import ReactDOM from 'react-dom';

var grumber = null;

var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "account": 1,
      "assignList": 1,
      "userPass": "duck",
      "contents": [
        "first": "Cole",
        "username": "roberto5",
        "email": "cole@cole.com"
      ]
    },

    "2": {
      "_id": 2,
      "account": 2,
      "assignList": 1,
      "userPass": "monkey",
      "contents": [
        "first": "Elliot",
        "username": "coooooleedfront",
        "email": "kylekyle@kyle.t"
      ]
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
    "test": {
      "_id": 1,
      "assignment": [
        {
        'title': 'Quiz',
        'start': new Date(2017, 3, 7),
        'end': new Date(2017, 3, 10)
        },
        {
          'title': 'HW',
          'start': new Date(2017, 3, 20),
          'end': new Date(2017, 3, 20)
        }
      ]
    },
    "2": {
      "_id": 2,
      "assignment": [
        {
          'title': 'HW',
          'start': new Date(2017, 4, 7),
          'end': new Date(2017, 4, 10)
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

export function getInitialData(){
  return initialData;
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
export default class ResetDatabase extends React.Component {
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
/*
ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);*/
