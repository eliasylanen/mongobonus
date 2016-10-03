const mongoClient = require('mongodb').MongoClient;

exports.fetchFromDatabase = (collection, searchParameter, cb) => {
  const url = 'mongodb://localhost:27017/library';

  mongoClient.connect(url, (err, db) => {
    if (err) return;
    const collect = db.collection(collection);
    collect.find(searchParameter).toArray()
      .then((data) => { db.close(); cb(data); })
      .catch((findErr) => { db.close(); throw new Error(findErr); });
  });
};
