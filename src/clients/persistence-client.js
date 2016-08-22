const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myproject';

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

function addEvent(event) {
  return new Promise((resolve, reject) => {
    connect().then(db => {
      const collection = db.collection('events');
      collection.insert(event, {}, (err, doc) =>{
        if(err) {
          reject(err)
        } else {
          resolve(doc)
        }
        db.close();
      });
    }).catch(err => reject(err));
  });
}

function findEvents(queryObject, callback) {
  MongoClient.connect(url, (err, db) => {

    db.close();
  });
}


module.exports = {
  addEvent,
  findEvents
}
